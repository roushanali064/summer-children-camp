import useMyClass from "../../../hooks/useMyClass";


const InstructorClasses = () => {
    const [myClasses] = useMyClass();
    console.log(myClasses)

    return (
        <div className="bg-[#FFF7DF] p-14 rounded">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">My Classes</h2>
            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((singleClass, index) => <tr
                            key={singleClass._id}
                            >
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {singleClass.name}
                                </td>
                                <td>
                                    {singleClass.status}
                                </td>
                                <td>{singleClass?.feedback || 'No Feedback'}</td>
                                <th>
                                    <button className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white">Update</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;