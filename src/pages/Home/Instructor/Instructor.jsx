import useInstructor from "../../../hooks/useInstructor";
import InstructorCard from "../../../components/InstructorCard";


const Instructor = () => {
    const[instructor]=useInstructor();
    
    return (
        <div>
            <h2 className="text-transparent text-5xl font-extrabold bg-gradient-to-r from-[#FF8A00] to-[#FFC000] bg-clip-text text-center">Our Popular Instructor</h2>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-5 mt-12">
            {
                instructor.slice(0,6).map(item=><InstructorCard
                key={item._id}
                item={item}
                ></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructor;