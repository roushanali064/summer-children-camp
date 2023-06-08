import { useEffect } from "react";
import { useState } from "react";
import ClassesCard from "./ClassesCard";


const Classes = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setClasses(data)
        })
    },[])

    return (
        <div className="my-[100px]">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">Our Popular class</h2>
            {/* card */}
            <div className="md:grid flex flex-col justify-center items-center md:grid-cols-3 mt-[50px] gap-5">
                {
                    classes.map(singleClass=><ClassesCard
                    key={singleClass._id}
                    singleClass={singleClass}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;