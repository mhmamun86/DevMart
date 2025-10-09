import React, { useEffect, useState } from 'react';
import { getApps } from '../utils/localStorage';
import useApps from '../Hooks/useFetchData';
import App from './App';
import Loader from '../components/Loader';
import NotFound from '../components/NotFound';

const Apps = () => {
  const data = useApps();
  const { apps, loading } = data;
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const term = search.trim().toLowerCase();

    if (term) {
      setSearchLoading(true);

      const timer = setTimeout(() => {
        const filtered = apps.filter(data =>
          data.title.toLowerCase().includes(term)
        );
        setSearchedData(filtered);
        setSearchLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSearchedData(apps);
      setSearchLoading(false);
    }
  }, [search, apps]);

  return (
    <div className="max-w-11/12 mx-auto py-10 md:py-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-5xl mb-4">
          Your Installed Apps
        </h2>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between py-5 items-center">
          <h1 className="lg:text-3xl text-2xl font-semibold">
            ({searchedData.length}) Apps Found.
          </h1>

          <label className="input">
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Products"
            />
          </label>
        </div>
      </div>
      {loading || searchLoading ? (
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
        <NotFound></NotFound>
      )}
    </div>
  );
};

export default Apps;
