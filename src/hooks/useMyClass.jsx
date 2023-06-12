import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../pages/Shared/Provider/AuthProvider";


const useMyClass = () => {
    const {user} = useContext(AuthContext)
    const {data:MyClasses=[],refetch } = useQuery({
        queryKey: ['MyClasses',user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-children-camp-server.vercel.app/myclasses/${user?.email}`)
            return res.json()
        }
    })
    return [MyClasses,refetch]
};

export default useMyClass;