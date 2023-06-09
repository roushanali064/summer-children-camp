import Activity from "../Activity/Activity";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructor from "../Instructor/Instructor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes/>
            <Instructor/>
            <Activity/>
        </div>
    );
};

export default Home;