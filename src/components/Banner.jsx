import React from 'react';
import playLogo from '../assets/play.png';
import appleLogo from '../assets/apple.png';
import hero from '../assets/hero.png';
import States from './states';

const Banner = () => {
  return (
    <div className="text-center mt-5 md:mt-20">
      <div className="space-y-4 max-w-11/12 mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold">
          We Build{' '}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text block">
            Productive <span className="text-black">Apps</span>
          </span>{' '}
        </h2>
        <p className="text-[#627382] text-xl">
          At Dev Mart , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-2.5 items-center py-3 px-6 rounded-sm border-2 border-[#D2D2D2]">
            <img className="h-8" src={playLogo} />
            <h3 className="font-semibold text-xl">Google Play</h3>
          </div>
          <div className="flex gap-2.5 items-center py-3 px-6 rounded-sm border-2 border-[#D2D2D2]">
            <img className="h-8" src={appleLogo} />
            <h3 className="font-semibold text-xl">App Store</h3>
          </div>
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
