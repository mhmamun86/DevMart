import React from 'react';
import notFound from '../assets/App-Error.png';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center p-4 md:p-12 space-y-4">
        <img src={notFound} alt="" />
        <h1 className="font-semibold text-5xl">OPPS!! APP NOT FOUND</h1>
        <p className="text-xl text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div
          onClick={() => navigate(-1)}
          className="btn mt-6 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back
        </div>
      </div>
    </div>
  );
};

export default NotFound;
