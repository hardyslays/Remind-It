import React from "react";
import { Link } from "react-router-dom";
import { URL_LOGIN, URL_REGISTER } from "../Helpers/urls";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>

      <Link to={URL_LOGIN}>Login</Link>
      <br />
      <Link to={URL_REGISTER}>Register</Link>
    </div>
  );
};

export default Home;
