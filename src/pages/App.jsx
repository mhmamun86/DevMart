import React from 'react';
import { Link, useNavigate } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import { shortNumber } from '../utils/apps';

const App = ({ app }) => {
  const { title, image, id, downloads, ratingAvg } = app;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/apps/appsDetails/${id}`)}>
      <div className="card space-y-4 bg-base-100 shadow-sm hover:scale-105 transition ease-in-out p-4 cursor-pointer">
        <figure className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full"
          />
        </figure>

        <div className="card-body p-0">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center bg-[#F1F5E8] rounded-sm px-3 py-1.5">
              <img className="h-4" src={downloadIcon} alt="download icon" />
              <span className="font-medium text-[#00D390]">
                {shortNumber(downloads)}
              </span>
            </div>
            <div className="flex gap-3 items-center bg-[#F1F5E8] rounded-sm px-3 py-1.5">
              <img className="h-4" src={ratingIcon} alt="download icon" />
              <span className="font-medium text-[#FF8811]">{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
