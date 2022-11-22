import React, { useEffect, useReducer } from "react";
import LoginRouter from "./routes/LoginRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthRedurcer";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    // Comparto el estado de autenticacion (log) y el del dispatch para cambiar el estado
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
