import { useEffect } from "react";
import Home from "./Home";
import { logout } from "../utils/auth";

const Logout = () => {
  useEffect(() => {
    logout();
  }, []);
  return <Home title="You have been logged out" />;
};

export default Logout;
