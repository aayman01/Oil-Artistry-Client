import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        <div className="flex items-center justify-center min-h-screen">
          <ScaleLoader color="#B81D33" height={50} />
        </div>;
    }

    if (user) {
        return children;
    }
    
    
    return <NavLink state={location.pathname} to="/login"></NavLink>
};

PrivateRoute.propTypes = {
    children : PropTypes.node.isRequired,
}
export default PrivateRoute;