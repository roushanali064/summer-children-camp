import { Link } from "react-router-dom";
import logo from '../../../assets/logo.webp'

const NavBar = () => {

    const navOptions=<>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/'>Classes</Link></li>
        <li><Link to='/'>Dashboard</Link></li>
    </>

    return (
        <>
        <div className="navbar fixed z-10 bg-[#15151580]  text-white max-w-screen-xl py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#15151580]  text-white text-xl font-bold rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={logo} alt="" className="h-16" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/'>
                        <button className="btn gap-2 mr-4">
                            login
                        </button>
                    </Link>
                    {/* {user ? <><h3 className="text-2xl font-bold mr-5">{user?.displayName}</h3> <button onClick={handleLogout} className="btn">Log Out</button></> : <Link className="btn" to='/login'>Login</Link>} */}
                </div>
            </div>
        </>
    );
};

export default NavBar;