import { NavLink, Outlet } from "react-router-dom";
import useUser from "../../../hooks/useUser";


const DashBoard = () => {
    const [userType] = useUser();
    const isInstructor = userType?.role === 'instructor'
    const isAdmin = userType?.role === 'admin'

    return (
        <div className="drawer lg:drawer-open pt-24">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-76 h-full bg-gradient-to-r from-[#FFC000] to-[#FF8A00]  text-white text-xl font-bold">
                    {
                        isInstructor ? <>
                            <li><NavLink
                                to='/dashboard/addclass'
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-transparent " : ""
                                }>Add Class</NavLink></li>
                            <li><NavLink
                                to='/dashboard/instructorclasses'
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-transparent " : ""
                                }>My Class</NavLink></li>
                        </> : isAdmin ? 
                            <>
                            <li><NavLink
                                to='/dashboard/manageclasses'
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-transparent " : ""
                                }>Manage Classes</NavLink></li>
                            <li><NavLink
                                to=''
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-transparent " : ""
                                }>My Class</NavLink></li>
                            </> : 
                            <>
                            
                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;