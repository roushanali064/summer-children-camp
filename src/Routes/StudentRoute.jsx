import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";
import useUser from "../hooks/useUser";
import loadingImg from '../assets/loading.gif'


const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [userType, userLoading] = useUser();
    const isStudent = userType?.role === 'student'
    
    if (loading || userLoading) {
        return <>
            <div className="flex justify-center items-center h-full w-full pt-24">
                <img src={loadingImg} alt="" />
            </div>
        </>
    }

    if (user && isStudent) {
        return children
    }


    return  <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default StudentRoute;