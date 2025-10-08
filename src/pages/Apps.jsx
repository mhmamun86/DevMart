import React, { useState } from 'react';
import { getApps } from '../utils/localStorage';
import useApps from '../Hooks/useFetchData';
import App from './App';
import Loader from '../components/Loader';

const Apps = () => {
  const data = useApps();
  const { apps, loading, error } = data;
  const [search, setSearch] = useState('');
  const searchData = search.trim().toLowerCase();
  const searchedData = searchData
    ? apps.filter(app => app.title.toLowerCase().includes(searchData))
    : apps;
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
            ({searchedData.length}) Apps Found.
          </h1>

          <label className="input">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="search"
              placeholder="Search Products"
            />
          </label>
        </div>
      </div>
      {loading ? (
        <Loader count={16}></Loader>
      ) : searchedData.length !== 0 ? (
        <div>
          <div>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-6">
              {searchedData.map(app => (
                <App key={app.id} app={app}></App>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No apps</p>
      )}
    </div>
  );
};

export default Apps;
