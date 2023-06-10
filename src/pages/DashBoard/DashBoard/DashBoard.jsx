import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open pt-24">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-[#FFC000] to-[#FF8A00]  text-white text-xl font-bold">
                    {/* Sidebar content here */}
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? "text-white bg-transparent " : ""
                        }>Add Class</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? "text-white bg-transparent " : ""
                        }>My Class</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;