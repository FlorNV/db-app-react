import { Navigate } from "react-router-dom";

const PublicRoute = ({ auth, children }) => {
  return !auth.log ? children : <Navigate to="/" />;
};

export default PublicRoute;
