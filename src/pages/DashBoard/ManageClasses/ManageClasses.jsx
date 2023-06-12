import axios from "axios";
import useManageClasses from "../../../hooks/useManageClasses";
import Swal from "sweetalert2";
import { useState } from "react";


const ManageClasses = () => {
    const [id, setId] = useState(null);
    const [AllClasses, refetch] = useManageClasses();
    
    const handleApproved = id => {
        console.log(id)
        const status = { status: 'approved' }
        axios.put(`http://localhost:5000/status/${id}`, status)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire(
                        'Class Approved Successfully!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDeny = id => {
        console.log(id)
        const status = { status: 'deny' }
        axios.put(`http://localhost:5000/status/deny/${id}`, status)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire(
                        'Class Deny Successfully!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleFeedback = e => {
        const feedback = {feedback: e.target.feedback.value}
        
        axios.patch(`http://localhost:5000/feedback/${id}`, feedback)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire(
                        'Feedback send Successfully!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
            .catch(err => {
                console.log(err)
            })
        console.log(feedback)
    }
    

    return (
        <div className="bg-[#FFF7DF] pt-2 pb-2 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center pb-2">Manage Classes</h2>
            

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleFeedback} method="dialog" className="modal-box">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write Feedback</span>
                        </label>
                        <textarea name="feedback" className="textarea textarea-bordered h-24" placeholder="Bio" required></textarea>
                    </div>
                    <input className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white mt-4" type="submit" value="Send Feedback" />

                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image & Name</th>
                            <th> Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>status</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllClasses.map((singleClass, index) => <tr
                                key={singleClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.image} alt="class img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{singleClass.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {singleClass.instructor}
                                </td>
                                <td>{singleClass?.email}</td>
                                <td className="text-center">{singleClass?.availableSeats}</td>
                                <td className="text-right">{singleClass?.price}</td>
                                <td className="text-center">{singleClass?.status}</td>
                                <td>
                                    <button disabled={singleClass.status === 'approved' || singleClass.status === 'deny'} onClick={() => handleApproved(singleClass._id)} className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Approve</button>
                                </td>
                                <td>
                                    <button disabled={singleClass.status === 'approved' || singleClass.status === 'deny'}
                                        onClick={() => handleDeny(singleClass._id)}
                                        className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Deny</button>
                                </td>
                                <td>
                                    <button
                                        disabled={singleClass?.feedback}
                                        onClick={() => window.my_modal_5.showModal(setId(singleClass._id)) } className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">send feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;