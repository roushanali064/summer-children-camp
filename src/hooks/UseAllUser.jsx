import { useQuery } from "@tanstack/react-query";


const UseAllUser = () => {
    const {data: AllUser=[], refetch}=useQuery({
        queryKey: ['AllUser'],
        queryFn: async ()=>{
            const res = await fetch('https://summer-children-camp-server.vercel.app/users')
            
            return res.json()
        }
    });
    return [AllUser, refetch]
};

export default UseAllUser;