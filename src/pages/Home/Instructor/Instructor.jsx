import useInstructor from "../../../hooks/useInstructor";


const Instructor = () => {
    const[instructor]=useInstructor();
    console.log(instructor)
    return (
        <div>
            <h3>i am instructor</h3>
        </div>
    );
};

export default Instructor;