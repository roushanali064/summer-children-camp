

const ClassesCard = ({ singleClass}) => {
    const { name, image, enrolled, instructor } = singleClass;
    return (
        <div className="card card-compact w-96 bg-gradient-to-r from-[#FF8A00] to-[#FFC000] shadow-xl">
            <figure><img src={image} alt="dance img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl"><span className="text-xl font-bold">Course Name:</span> {name}</h2>
                <p className="text-xl"><span  className="text-xl font-bold">instructor:</span> {instructor}</p>
                <p className="text-xl"><span className="text-xl font-bold">Enrolled By:</span> {enrolled}</p>
            </div>
        </div>
    );
};

export default ClassesCard;