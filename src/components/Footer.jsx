import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Footer = () => {
  const navLink = (
    <>
      <p className="">
        <Link to="/">Home</Link>
      </p>
      <p className="">
        <Link to={'/apps'}>Apps</Link>
      </p>
      <p className="">
        <Link to={'/installed'}>Installation</Link>
      </p>
    </>
  );
  return (
    <div className="">
      <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-primary sm:footer-horizontal text-white p-10">
        <aside>
          <div className="flex gap-2 items-center">
            <Link to={'/'}>
              <img className="h-10" src={logo} />
            </Link>

            <Link to={'/'}>
              <h2 className="text-xl font-bold">Dev Mart</h2>
            </Link>
          </div>
          <p>
            Dev Mart – Your Smart App Marketplace
            <br />
            Explore & Install Modern Apps
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Pages</h6>
          {navLink}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="border-t-1 border-black opacity-40"></div>
      <div className="footer sm:footer-horizontal footer-center bg-primary text-white p-4 ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Dev
            Mart
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
