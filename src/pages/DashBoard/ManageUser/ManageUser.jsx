import axios from "axios";
import UseAllUser from "../../../hooks/UseAllUser";
import Swal from "sweetalert2";


const ManageUser = () => {
    const [AllUser, refetch] = UseAllUser()
    
    
    const handleInstructor = id =>{
        
        const role = {role: 'instructor'}
        axios.put(`http://localhost:5000/user/${id}`,role)
        .then(data => {
            refetch()
            if (data.data.modifiedCount > 0) {
                Swal.fire(
                    'User role update Successfully!',
                    'You clicked the button!',
                    'success'
                )
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleAdmin = id =>{
        
        const role = {role: 'admin'}
        axios.put(`http://localhost:5000/user/${id}`,role)
         .then(data => {
             refetch()
             if (data.data.modifiedCount > 0) {
                 Swal.fire(
                     'User role update Successfully!',
                     'You clicked the button!',
                     'success'
                 )
             }
         })
         .catch(err => {
             console.log(err)
         })
    }

    return (
        <div className="bg-[#FFF7DF] p-14 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">My Classes</h2>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllUser.map((user, index) => <tr
                            key={user._id}
                            >
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user?.role}</td>
                                <td>
                                    <button
                                    onClick={()=>handleInstructor(user._id)}
                                    disabled={user.role === 'instructor'} 
                                    className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Make Instructor</button>
                                </td>
                                <td>
                                    <button
                                    onClick={()=>handleAdmin(user._id)} 
                                    disabled={user?.role === 'admin'}
                                    className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Make Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;