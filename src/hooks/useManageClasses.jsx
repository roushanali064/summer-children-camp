import { useQuery } from "@tanstack/react-query";


const useManageClasses = () => {
    const {data:AllClasses=[],refetch } = useQuery({
        queryKey: ['AllClasses'],
        queryFn: async () => {
            const res = await fetch('https://summer-children-camp-server.vercel.app/manageclasses')
            return res.json()
        }
    })
    return [AllClasses,refetch]
};

export default useManageClasses;