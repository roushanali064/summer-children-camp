import { useContext } from "react";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const {user}=useContext(AuthContext)
    const {data: userType={}, isLoading: userLoading}=useQuery({
        queryKey: ['userType',user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/user/${user?.email}`)
            const result = await res.json()
            return result
        }
    });
    return [userType,userLoading]
};

export default useUser;