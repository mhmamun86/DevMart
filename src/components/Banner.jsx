import React from 'react';
import playLogo from '../assets/play.png';
import appleLogo from '../assets/apple.png';
import hero from '../assets/hero.png';
import States from './states';
import { useNavigate } from 'react-router';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5 md:mt-20 ">
      <div className="space-y-4 max-w-11/12 mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold">
          We Build{' '}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text block">
            Productive <span className="text-black">Apps</span>
          </span>{' '}
        </h2>
        <p className="text-[#627382] text-lg md:text-xl">
          At Dev Mart , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 bg-white hover:shadow-lg hover:border-gray-400 hover:scale-105 transition-all duration-300"
          >
            <img className="w-8 h-8" src={appleLogo} alt="App Store" />
            <div className="text-left leading-tight">
              <p className="font-semibold text-black">App Store</p>
            </div>
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 bg-white hover:shadow-lg hover:border-gray-400 hover:scale-105 transition-all duration-300"
          >
            <img className="w-8 h-8" src={playLogo} alt="Play Store" />
            <div className="text-left leading-tight">
              <p className="font-semibold text-black">Play Store</p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center mb-0">
          <img src={hero} />
        </div>
      </div>
      <div className="hidden lg:block">
        <States></States>
      </div>
    </div>
  );
};

export default Banner;
