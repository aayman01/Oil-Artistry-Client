import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/navlogo.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const NavBar = () => {

  const { user , logOut } = useContext(AuthContext)

  
     const navLinks = (
       <>
         <li>
           <NavLink
             className={({ isActive }) =>
               isActive
                 ? " font-medium border-2 hover:bg-[#B81D33] text-[#B81D33] hover:text-white border-[#B81D33]"
                 : "text-black md:text-[#B81D33] text-base font-medium"
             }
             to="/"
           >
             Home
           </NavLink>
         </li>

         <li>
           <NavLink
             className={({ isActive }) =>
               isActive
                 ? "text-lg font-medium border-2 hover:bg-[#B81D33] text-[#B81D33] hover:text-white border-[#B81D33]"
                 : "text-black md:text-[#B81D33] text-base font-medium"
             }
             to="/alliteams"
           >
             All Art & craft Items
           </NavLink>
         </li>
         <li>
           <NavLink
             className={({ isActive }) =>
               isActive
                 ? "text-lg font-medium border-2 hover:bg-[#B81D33] text-[#B81D33] hover:text-white border-[#B81D33]"
                 : "text-black md:text-[#B81D33] text-base font-medium"
             }
             to="/addcraftiteam"
           >
             Add Craft Item
           </NavLink>
         </li>
         <li>
           <NavLink
             className={({ isActive }) =>
               isActive
                 ? "text-lg font-medium border-2 hover:bg-[#B81D33] text-[#B81D33] hover:text-white border-[#B81D33]"
                 : "text-black md:text-[#B81D33] text-base font-medium"
             }
             to="/mycraftlist"
           >
             My Art&Craft List
           </NavLink>
         </li>
       </>
     );
    return (
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/">
                <img className="w-24 h-24 rounded-full" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex flex-row gap-2 items-center">
                <div tabIndex={0} className="avatar mr-3">
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                  >
                    <button className="w-12 rounded-full">
                      <img className="rounded-full" src={user?.photoURL} />
                    </button>
                  </a>
                </div>
                <button
                  onClick={logOut}
                  className="btn border-0 bg-[#B81D33] hover:text-[#B81D33] text-white font-semibold"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="btn mr-2 border-0 bg-[#B81D33] hover:text-[#B81D33] text-white font-semibold">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn border-0 bg-[#B81D33] hover:text-[#B81D33] text-white font-semibold">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    );
};

export default NavBar;