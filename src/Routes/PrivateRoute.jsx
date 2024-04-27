import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
      return <div className="flex min-h-screen justify-center items-center">
        <ScaleLoader color="#B81D33" height={50} />
      </div>;
    }

    if (user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children : PropTypes.node.isRequired,
}
export default PrivateRoute;