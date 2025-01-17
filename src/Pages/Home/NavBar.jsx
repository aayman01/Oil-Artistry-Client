import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/navlogo.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


const NavBar = () => {

  const { user , logOut } = useContext(AuthContext)
  const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");

  useEffect(()=>{
    localStorage.setItem("theme",theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme);
  },[theme])

  const handleToggle = e => {
    if(e.target.checked){
      setTheme("dark")
    }
    else(
      setTheme("light")
    )
  }
  
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
                className="menu menu-sm dropdown-content bg-white mt-3 z-[100] p-2 rounded-lg shadow w-52"
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
            <label className="swap swap-rotate mr-5">
              <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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