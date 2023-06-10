import { useEffect } from "react"

const useTitle=({route})=>{
    useEffect(()=>{
        document.title=(`Summer Camp Children | ${route}`)
    },[])
}

export default useTitle;