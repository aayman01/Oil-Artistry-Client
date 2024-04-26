import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/navlogo.png"

const NavBar = () => {
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
             to="/updateprofile"
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
             to="/addproperty"
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
              <Link to ="/">
                <img className="w-24 h-24 rounded-full" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            {/* {user ? (
              <div className="flex flex-row gap-2 items-center">
                <div tabIndex={0} className="avatar mr-3">
                  <button
                    className="w-10 rounded-full tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <img
                      className="rounded-full"
                      src={user?.photoURL || <CgProfile />}
                    />
                  </button>
                </div>
                <button
                  onClick={logOut}
                  className="btn border-0 bg-[#00C194] text-white font-semibold"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn border-0 bg-[#00C194] text-white font-semibold">
                  Login
                </button>
              </Link>
            )} */}
            <button className="btn">Log IN</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </div>
    );
};

export default NavBar;