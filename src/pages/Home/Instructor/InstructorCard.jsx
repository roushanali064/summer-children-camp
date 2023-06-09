

const InstructorCard = ({ item }) => {
    const { name, image, email, classes,students } = item;
    return (
        <div className="card card-compact w-96 bg-gradient-to-r from-[#FF8A00] to-[#FFC000] shadow-xl">
            <figure className=" py-4 ">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={image} alt="teacher img" />
                    </div>
                </div>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title text-xl"><span className="text-xl font-bold">Name:</span> {name}</h2>
                <p className="text-xl">
                    <span className="text-xl font-bold">Classes:</span> {classes}
                    </p>
                <p className="text-xl">
                    <span className="text-xl font-bold">Students:</span> {students}
                    </p>
                <p className="text-xl"><span className="text-xl font-bold">Email:</span> {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;