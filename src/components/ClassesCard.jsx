

const ClassesCard = ({ singleClass}) => {
    const { name, image, enrolled, instructor } = singleClass;
    return (
        <div className="card card-compact w-96 bg-gradient-to-r from-[#FF8A00] to-[#FFC000] shadow-xl">
            <figure className="relative"><img src={image} alt="dance img" /></figure>
            <div style={{ borderRadius: '0 10px 0 10px'}} className="absolute right-0 top-0  bg-gradient-to-r from-[#FF8A00] to-[#FFC000] px-5 py-4 text-xl font-semibold"><p className=" text-white">Premium</p></div>
            <div className="card-body text-white">
                <h2 className="card-title text-xl"><span className="text-xl font-bold">Course Name:</span> {name}</h2>
                <p className="text-xl"><span  className="text-xl font-bold">instructor:</span> {instructor}</p>
                <p className="text-xl"><span className="text-xl font-bold">Enrolled By:</span> {enrolled}</p>
            </div>
        </div>
    );
};

export default ClassesCard;