import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth, children }) => {
  return auth.log ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
