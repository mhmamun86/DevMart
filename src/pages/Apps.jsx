import React from 'react';
import { getApps } from '../utils/localStorage';
import useApps from '../Hooks/useFetchData';
import App from './App';

const Apps = () => {
  const data = useApps();
  const { apps, loading, error } = data;

  return (
    <div className="max-w-11/12 mx-auto py-20">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Your Installed Apps</h2>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">
            ({apps.length}) Apps Found.
          </h1>

          <label className="form-control w-full max-w-xs">
            <select className="select select-bordered">
              <option value="none">Sort by price</option>
              <option value="download-asc">Low-&gt;High</option>
              <option value="download-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-6">
          {apps.map(app => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
