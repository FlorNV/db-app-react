import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    navigate("/men");
  };

  return (
    <div className="m-5 text-center">
      <img src="/assets/animate.gif" alt="animacion" />
      <h1 className="my-3">Login Screen</h1>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
