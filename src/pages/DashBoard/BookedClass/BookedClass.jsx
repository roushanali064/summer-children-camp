import { useContext } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const BookedClass = () => {
    const {user} = useContext(AuthContext)
    
    const {data:BookedClasses=[], refetch} = useQuery({
        queryKey: ['BookedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-children-camp-server.vercel.app/booked/class/${user?.email}`)
            return res.json()
        }
    })

    const handleDelete = id =>{
        console.log(id)
        axios.delete(`https://summer-children-camp-server.vercel.app/booked/class/${id}`)
        .then(res=>{
            refetch()
            if(res.data.deletedCount === 1){
                Swal.fire(
                    'Class Deny Successfully!',
                    'You clicked the button!',
                    'success'
                )
            }
        })
        .catch(err=>{
            console.error(err)
        })
    }

    

    return (
        <div  className="bg-[#FFF7DF] pt-2 pb-2 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center pb-2">My Selected Class</h2>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image & Name</th>
                            <th> Instructor name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BookedClasses.map((bookedClass, index) => <tr
                                key={bookedClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={bookedClass.image} alt="class img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bookedClass.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {bookedClass.instructor}
                                </td>
                                <td className="text-right">{bookedClass?.price}</td>
                                <td>
                                    <Link to='/dashboard/payment' state={{ bookedClass}}>
                                    <button
                                        className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={()=>handleDelete(bookedClass?._id)} 
                                        className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white"><FaTrash/></button>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedClass;