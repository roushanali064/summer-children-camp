import { useContext } from "react";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from '../assets/loading.gif'
import useUser from "../hooks/useUser";



const InstructorRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [userType, instructorLoading] = useUser();
    const isInstructor = userType?.role === 'instructor'
    
    if (loading || instructorLoading) {
        return <>
            <div className="flex justify-center items-center h-full w-full pt-24">
                <img src={loadingImg} alt="" />
            </div>
        </>
    }

    if (user && isInstructor) {
        return children
    }


    return  <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;