
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-900 col-span-2 hover:col-span-4 md:hover:col-span-2 h-screen sticky top-0 left-0 p-5">
            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/dashboard/supplies" 
                    className="p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2"
                >
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Supplies</span>
                </NavLink>
                <NavLink
                    to="/dashboard/create-supply"
                    className="p-3 bg-neutral-700 text-white hover:text-red-500 rounded-md truncate transition-all flex items-center gap-2"
                >
                    <LayoutDashboard className="shrink-0" />
                    <span className="truncate">Create Post</span>
                </NavLink>
                
            </nav>
        </div>
    );
};


export default Sidebar;
