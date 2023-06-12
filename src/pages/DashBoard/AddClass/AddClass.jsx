import { useForm } from "react-hook-form";
import useUser from "../../../hooks/useUser";
import axios from "axios";
import Swal from "sweetalert2";


const AddClass = () => {
    const [userType]=useUser();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();

    const onSubmit = data => {
        
        const newClass = {
            name: data.name,
            image: data.image,
            instructor: data.instructor,
            email: data.email,
            availableSeats: parseInt(data.seats),
            price: parseInt(data.price),
            status: 'pending',
            enrolled: 0
        }
        axios.post('https://summer-children-camp-server.vercel.app/class',{newClass})
        .then(res=>{
            if(res?.data.acknowledged){
                Swal.fire(
                    `${data.name} class add Successfully!`,
                    'You clicked the button!',
                    'success'
                )
            }
            reset()
        })
        .catch(err=>{
            console.log(err)
        })
        
    };


    return (
        <div className="bg-[#FFF7DF] p-14 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">Add Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5 text-xl font-bold pt-4">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name" className="input input-bordered w-full max-w-xs" {...register("name", { required: true })}/>
                        {errors.name && <span className="text-red-600">name field is required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="url" placeholder="Enter Image Url" className="input input-bordered w-full max-w-xs" {...register("image", { required: true })}/>
                        {errors.image && <span className="text-red-600">image field is required</span>}
                    </div>
                </div>
                <div className="flex gap-5 text-xl font-bold">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" readOnly defaultValue={userType?.name} className="input input-bordered w-full max-w-xs" {...register("instructor", { required: true })}/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" readOnly defaultValue={userType?.email} className="input input-bordered w-full max-w-xs" {...register("email", { required: true })}/>
                    </div>
                </div>
                <div className="flex gap-5 text-xl font-bold">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" placeholder="Add available seats" className="input input-bordered w-full max-w-xs" {...register("seats", { required: true })}/>
                        {errors.seats && <span className="text-red-600">seats field is required</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Add price" className="input input-bordered w-full max-w-xs" {...register("price", { required: true })}/>
                        {errors.price && <span className="text-red-600">price field is required</span>}
                    </div>
                </div>
                <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white w-full mt-5" type="submit" value="Add class" />
            </form>
        </div>
    );
};

export default AddClass;