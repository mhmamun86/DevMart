import React from 'react';
import { shortNumber } from '../utils/apps';
import useApps from '../Hooks/useFetchData';

const States = () => {
  const data = useApps();
  const { apps, loading, error } = data;

  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
  const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
  const totalApps = apps.length;
  return (
    <div className="mb-20">
      <div className="shadow p-4 md:p-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="md:stats ">
          <div className="stat space-y-4">
            <div className="opacity-80">
              <h3>Total Downloads</h3>
            </div>
            <div className="text-7xl text-white font-extrabold">
              {shortNumber(totalDownloads)}
            </div>
            <div className="opacity-80">21% more than last month</div>
          </div>

          <div className="stat space-y-4">
            <div className="opacity-80">
              <h3>Total Reviews</h3>
            </div>
            <div className="text-7xl text-white font-extrabold">
              {shortNumber(totalReviews)}
            </div>
            <div className="opacity-80">21% more than last month</div>
          </div>

          <div className="stat space-y-4">
            <div className="opacity-80">
              <h3>Active Apps</h3>
            </div>
            <div className="text-7xl text-white font-extrabold">
              {shortNumber(totalApps)}+
            </div>
            <div className="opacity-80">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
