import { Link } from 'react-router-dom';
import image from '../assets/404.gif'

const NotFound = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className=''>
                <img className='' src={image} alt="" />
            </div>
            <Link to='/'>
                <button className="btn bg-gradient-to-r from-[#FFC000] to-[#FF8A00] border-none text-white mt-4">
                    Go TO Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;