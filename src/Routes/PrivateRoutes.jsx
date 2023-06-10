import { useContext } from "react";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from '../assets/loading.gif'


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <>
            <div className="flex justify-center items-center h-full w-full pt-24">
                <img src={loadingImg} alt="" />
            </div>
        </>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;