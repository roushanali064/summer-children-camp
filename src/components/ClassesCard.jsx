import useUser from "../hooks/useUser";


const ClassesCard = ({ singleClass, handleSelectClass }) => {
    const { name, image, enrolled, instructor, availableSeats } = singleClass;

    const [userType] = useUser();
    const isAdminOrInstructor = userType?.role === 'admin' || userType?.role === 'instructor'

    return (
        <div className={availableSeats === 0 ? 'bg-red-500 p-4 rounded-xl' : ''}>
            <div className="card card-compact w-96 bg-gradient-to-r from-[#FF8A00] to-[#FFC000] shadow-xl">
                <figure className="relative"><img src={image} alt="dance img" /></figure>
                <div style={{ borderRadius: '0 10px 0 10px' }} className="absolute right-0 top-0  bg-gradient-to-r from-[#FF8A00] to-[#FFC000] px-5 py-4 text-xl font-semibold"><p className=" text-white">Premium</p></div>
                <div className="card-body text-white">
                    <h2 className="card-title text-xl"><span className="text-xl font-bold">Course Name:</span> {name}</h2>
                    <p className="text-xl"><span className="text-xl font-bold">instructor:</span> {instructor}</p>
                    <p className="text-xl"><span className="text-xl font-bold">Available Seats:</span> {availableSeats}</p>
                    <p className="text-xl"><span className="text-xl font-bold">Enrolled By:</span> {enrolled}</p>
                </div>
                <div className="text-right py-4 mr-4">
                    <button onClick={()=>handleSelectClass(singleClass)} disabled={isAdminOrInstructor || availableSeats === 0} className="btn">
                        Booked class
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;