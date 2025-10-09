import React, { useState } from 'react';
import { getApps, removeApps } from '../utils/localStorage';
import downloadIcon from '../assets/icon-downloads.png';
import ratingsIcon from '../assets/icon-ratings.png';
import { shortNumber } from '../utils/apps';
import NotFound from '../components/NotFound';
import { useNavigate } from 'react-router';

const InstalledApps = () => {
  const [installed, setInstalled] = useState(() => getApps());
  const handleUninstall = id => {
    const updated = removeApps(id, setInstalled);
  };
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('none');
  const sortedItem = (() => {
    if (sortOrder === 'download-asc') {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === 'download-desc') {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  return (
    <div className="max-w-11/12 mx-auto py-6 lg:py-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-5xl mb-4">
          Your Installed Apps
        </h2>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between py-5 items-center">
          <h1 className="lg:text-3xl text-2xl font-semibold">
            ({installed.length}) Apps Found.
          </h1>

          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by price</option>
              <option value="download-asc">Low-&gt;High</option>
              <option value="download-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      {installed.length ? (
        <div>
          <ul className="space-y-3  p-3 rounded-box ">
            {sortedItem.map(app => {
              return (
                <li
                  key={app.id}
                  className="bg-white flex justify-between gap-4 p-3 rounded-lg"
                >
                  <div
                    onClick={() => navigate(`/appsDetails/${app.id}`)}
                    className="flex gap-3"
                  >
                    <div>
                      <img className="size-10 rounded-box" src={app.image} />
                    </div>
                    <div>
                      <div>{app.title}</div>
                      <div className="text-xs font-semibold opacity-60 flex gap-4">
                        <div className="flex gap-1.5 items-center">
                          <img className="h-3" src={downloadIcon} alt="" />
                          <span className="text-[#00D390] font-medium">
                            {shortNumber(app.downloads)}
                          </span>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          <img className="h-3" src={ratingsIcon} alt="" />
                          <span className="text-[#FF8811] font-medium">
                            {app.ratingAvg}
                          </span>
                        </div>
                        <div>
                          <p>
                            <span>{app.size} </span> MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeApps(app.id, setInstalled)}
                    className="btn bg-[#00D390] text-white"
                  >
                    uninstall
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="p-20 flex flex-col justify-center items-center">
          <h2 className="text-2xl opacity-70 text-center">
            No Apps Installed{' '}
          </h2>
          <p className="text-xl opacity-40 text-center">
            Go Back and install app
          </p>
          <div
            onClick={() => navigate(`/apps`)}
            className="btn  mt-6 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] mb-8"
          >
            Show All Apps
          </div>
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
