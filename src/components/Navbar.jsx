import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import gitIcon from '../assets/github_icon.png';

const Navbar = () => {
  const navLink = (
    <>
      <li className="p-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="p-2">
        <NavLink to={'/apps'}>Apps</NavLink>
      </li>
      <li className="p-2">
        <NavLink to={'/installed'}>Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className=" border-b-1 bg-white border-[#E9E9E9] py-3">
      <div className="flex justify-between items-center max-w-11/12 mx-auto">
        <div className="flex-1 flex">
          <div className="flex gap-2 items-center justify-start">
            <Link to={'/'}>
              <img className="h-10" src={logo} />
            </Link>

            <Link to={'/'}>
              <h2 className="text-xl font-bold text-gradiant">Dev Mart</h2>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center hidden lg:block">
          <div className=" hidden md:block ">
            <ul className="menu menu-horizontal px-1 text-[#000000e6] font-medium">
              {navLink}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex items-center hidden lg:block">
          <div className="flex-1 flex justify-end">
            <div className=" ">
              <a
                href="https://github.com/mhmamun86/DevMart"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                  <img src={gitIcon} /> Contribute
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="dropdown 
        lg:hidden"
        >
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 right-0 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
            <div className="flex-1 flex items-center">
              <div className="flex-1 flex justify-center">
                <div className=" ">
                  <a
                    href="https://github.com/mhmamun86/DevMart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <div className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                      <img src={gitIcon} /> Contribute
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start max-w-11/12">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Link to={'/'}>
              <img className="h-10" src={logo} />
            </Link>

            <Link to={'/'}>
              <h2 className="text-xl font-bold text-gradiant">Dev Mart</h2>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#000000e6] font-medium">
            {navLink}
          </ul>
        </div>
        <div className=" ">
          <a
            href="https://github.com/mhmamun86/DevMart"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <div className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              <img src={gitIcon} /> Contribute
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
