const express = require("express");
const puppeteer = require("puppeteer");
const axios = require("axios");
const gtts = require("node-gtts")("en");
const pdf = require("pdf-parse");

const fs = require("fs");
const https = require("https");
const { title } = require("process");

const app = express();
const port = process.env.PORT || 3007;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const missingBooks = [];
  let failedAttempts = 0;
  const today = new Date();
  const timeStamp =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "-" +
    today.getHours() +
    "" +
    today.getMinutes();

  const data = [];

  console.log("Connecting to website:");

  for (let fileNum = 1; fileNum < 5; fileNum++) {
    try {
      await page.setDefaultNavigationTimeout(0);
      await page.goto(`https://www.gutenberg.org/ebooks/${fileNum}`, {
        waitUntil: "domcontentloaded",
      });
      //   await page.screenshot({ path: "./images/book.jpg" });
      const url = await page.url();

      // ------------------------------------------------ book url for pdf and text ---------------------------
      const fetchBookHref = await page.evaluate(() => {
        let bookOptions = document.querySelectorAll(
          "#download > div > table > tbody > tr > td > a"
        );
        if (bookOptions != undefined || bookOptions != null) {
          for (let i = 0; i < bookOptions.length; i++) {
            // if the book has a nice html version, get it
            if (bookOptions[i].innerText == "Read this book online: HTML") {
              return bookOptions[i].getAttribute("href");
            } else {
              // get text version instead
              if (bookOptions[i].innerText == "Plain Text UTF-8") {
                return bookOptions[i].getAttribute("href");
              }
            }
          }
        }
      });

      const fetchOriginBook = () => {
        let originBook = `https://www.gutenberg.org/files/${fileNum}/${fileNum}-h/${fileNum}-h.htm`;
        return originBook;
      };

      const fetchCopyrights = await page.evaluate(() => {
        let copyright = document.querySelectorAll(
          "#bibrec > div > table > tbody > tr > td"
        );
        let copy = "";
        for (let i = 0; i < copyright.length; i++) {
          if (copyright[i] != undefined || copyright[i] != null) {
            if (
              copyright[i].innerText ===
              copyright[copyright.length - 3].innerText
            ) {
              copy = copyright[i].innerText;
            }
          }
        }
        return copy;
      });

      // ----------------------------------------------- download pdf -----------------------------------------

      if (fetchBookHref === null) {
        console.log("Book not found. Will not get book.");
        title = "";
      } else {
        const bookUrl = url.slice(0, -9) + fetchBookHref;
        await page.goto(bookUrl);
        await page.pdf({
          path: `./data/pdf-books/pdf-book${fileNum}.pdf`,
          format: "a4",
          timeout: 0,
        });
      }

      // ------------------------------------------------ log results -----------------------------------------
      let info = {
        title: fetchBookNames,
      };

      console.log(info);

      axios({
        method: "post",
        url: "http://localhost:8080/api/posts/post",
        data: info,
      });

      data.push(info);

      // ------------------------------------------------ error handling ---------------------------------------
    } catch (err) {
      failed = true;
      const missingBook = `missing file #${fileNum}`;
      console.error(err);
      console.log(fileNum);
      failedAttempts++;
      console.log(`Failed Attempts: ${failedAttempts}`);
    }
  }

  console.log("Done getting files.");

  // ------------------------------------------------ return missing books ------------------------------------
  if (missingBooks.length > 0) {
    console.log("Creating text file with missing file.");
    fs.writeFile(
      `./data/missing/missing-books${timeStamp}.txt`,
      JSON.stringify(missingBooks),
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Missing text file created successfully.");
        }
      }
    );
  }

  await browser.close();
})();

[];

app.listen(port, () => console.log(`Listening on port ${port}`));
