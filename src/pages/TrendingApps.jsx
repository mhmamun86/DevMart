import React from 'react';
import useApps from '../Hooks/useFetchData';
import App from './App';
import States from '../components/states';

const TrendingApps = () => {
  const data = useApps();
  const { apps, loading, error } = data;
  const trendingAppsData = apps.slice(0, 8);
  return (
    <div>
      <div className="text-center max-w-11/12 mx-auto ">
        <h1 className="font-bold text-5xl">Trending Apps</h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-6">
          {trendingAppsData.map(app => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
        <div className="btn mt-6 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          Show All
        </div>
        <div>
          <States></States>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
