import { useRouter } from "next/router";
import { useUserAuth } from "../../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const router = useRouter();

  console.log("Check user in Private: ", user);
  if (!user) {
    router.push("/");
  } else if (user.providerId == "firebase") {
    return children;
  }
};

export default ProtectedRoute;
