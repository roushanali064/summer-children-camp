import ClassesCard from "../../components/ClassesCard";
import useClasses from "../../hooks/useClasses";


const AllClasses = () => {
    const [classes]=useClasses()
    return (
        <div className="pt-48">
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">See All classes</h2>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-5 mt-12">
                {
                    classes.map(singleClass=><ClassesCard
                    key={singleClass._id}
                    singleClass={singleClass}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;