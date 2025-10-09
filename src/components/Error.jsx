import React from 'react';
import error from '../assets/error-404.png';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center p-4 md:p-12 space-y-4">
          <img src={error} alt="" />
          <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
          <p className="text-xl text-[#627382]">
            The page you are looking for is not available.
          </p>
          <div
            onClick={() => navigate(-1)}
            className="btn mt-6 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Back
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
