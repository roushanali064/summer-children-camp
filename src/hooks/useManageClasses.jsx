import { useQuery } from "@tanstack/react-query";


const useManageClasses = () => {
    const {data:AllClasses=[],refetch } = useQuery({
        queryKey: ['AllClasses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/manageclasses')
            return res.json()
        }
    })
    return [AllClasses,refetch]
};

export default useManageClasses;