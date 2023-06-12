import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data: instructor=[],refetch}=useQuery({
        queryKey: ['instructor'],
        queryFn: async ()=>{
            const res = await fetch('https://summer-children-camp-server.vercel.app/instructor')
            return res.json()
        }
    })
    return [instructor,refetch];
};

export default useInstructor;