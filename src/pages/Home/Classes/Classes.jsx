import Swal from "sweetalert2";
import ClassesCard from "../../../components/ClassesCard";
import useClasses from "../../../hooks/useClasses";
import {  Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import axios from "axios";


const Classes = () => {
    const [classes] = useClasses();
    const {user} = useContext(AuthContext)

    const handleSelectClass = item =>{
        console.log(item)
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `At first login and before Booked ${item.name} the class`,
            })
            return
        }
        const data = {
            id: item._id,
            name: item.name,
            email: user?.email,
            price: item.price,
            image: item.image,
            instructor: item.instructor,
            availableSeats: item?.availableSeats
        }
        console.log(data)
        
        axios.post('https://summer-children-camp-server.vercel.app/booked/class',data)
        .then(res=>{
            console.log(res?.data)
            if(res?.data?.insertedId){
                Swal.fire(
                    'Class Book Successfully go to dash board ad make payment!',
                    'You clicked the button!',
                    'success'
                )
            }
        })
        .catch(err=>{
            console.error(err.message)
        })

    }

    return (
        <div className="my-[100px]">
            <Slide>
                <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">Our Popular class</h2>
            </Slide>
            {/* card */}
            <div className="md:grid flex flex-col justify-center items-center md:grid-cols-3 mt-[50px] gap-5">
                {
                    classes.slice(0, 6).map(singleClass => <ClassesCard
                        key={singleClass._id}
                        singleClass={singleClass}
                        handleSelectClass={handleSelectClass}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;