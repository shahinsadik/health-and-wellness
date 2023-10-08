import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const links = (
    <>
      <li className="font-bold text-white text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-white text-lg">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="font-bold text-white text-lg">
        <NavLink to="/events">Events</NavLink>
      </li>
      <li className="font-bold text-white text-lg">
        <NavLink to="/team">Our Team</NavLink>
      </li>
      <li className="font-bold text-white text-lg">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#5137ac] drop-shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-[#6c63ff] rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            Health & Wellness
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              {" "}
              <span className="mr-5 text-white font-semibold">
                {user?.email}{" "}
              </span>
              <div className="dropdown dropdown-end ">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar bg-white ">
                  <div className="w-10 rounded-full">
                    {
                      user.photoURL ? <img src={user?.photoURL} /> : <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/dee97162-41b2-4e11-1d58-1d86f8ac3a00/preview" /> 
                    }
                    
                    
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <a
                    onClick={handleLogOut}
                    className="btn btn-md font-bold text-white hover:text-[#ff3c00] border-none bg-[#ff3c00]">
                    {" "}
                    Log Out
                  </a>
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-sm font-bold text-white hover:text-[#ff3c00] bg-[#ff3c00] border-none">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn ml-5 btn-sm font-bold text-white hover:text-[#ff3c00] bg-[#ff3c00] border-none">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Navbar;
