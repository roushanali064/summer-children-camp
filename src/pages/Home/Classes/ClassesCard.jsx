

const ClassesCard = ({ singleClass}) => {
    const { name, image } = singleClass;
    return (
        <div className="card card-compact w-96 bg-gradient-to-r from-[#FF8A00] to-[#FFC000] shadow-xl">
            <figure><img src={image} alt="dance img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;