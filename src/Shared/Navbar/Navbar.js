import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(MyContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="container mx-auto ">
      <div className="navbar bg-primary">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <Link to="about">About</Link>
              </li>
              <li tabIndex={0}>
                <Link to="media">Media</Link>
              </li>
              <li tabIndex={0}>
                <Link to="message">Message</Link>
              </li>
              {user?.email ? (
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={"signin"}>Sign In</Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* <img src={logo} className="w-20" alt="" /> */}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0}>
                  <Link to="/">Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="about">About</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="media">Media</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="message">Message</Link>
                </li>
                {user?.email ? (
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to={"signin"}>Sign In</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src={user?.photoURL || avatar} alt="" /> */}
              </div>
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
