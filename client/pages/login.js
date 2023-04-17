import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Login = () => {
  const { logOut, user } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const [showForm, setShowForm] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleLogout = async () => {
    try {
      await logOut();
      refreshPage();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async () => {
    setError("");
    try {
      await logIn(email, password);
      refreshPage();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Login">
      <h1 className="content-header">Log In</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Container>
        <Row>
          <Col md>
            <FloatingLabel className="search-input-label" label="Email ">
              <Form.Control
                className="search-input-form-control"
                type="email"
                autoComplete="true"
                placeholder="Email "
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel className="search-input-label" label="Password ">
              <Form.Control
                className="search-input-form-control"
                type="password"
                autoComplete="true"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            {user ? (
              <div>
                <button
                  className="red-outline-btn"
                  onClick={() => {
                    handleLogout();
                    setShowForm(!showForm);
                  }}
                >
                  LOG OUT
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="primary-btn"
                  onClick={() => {
                    handleSubmit();
                    setShowForm(!showForm);
                  }}
                >
                  LOG IN
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
