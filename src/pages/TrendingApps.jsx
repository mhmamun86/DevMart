import React from 'react';
import useApps from '../Hooks/useFetchData';
import App from './App';
import States from '../components/states';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router';

const TrendingApps = () => {
  const navigate = useNavigate();
  const data = useApps();
  const { apps, loading } = data;
  const trendingAppsData = apps.slice(0, 8);
  return (
    <div>
      <div className="text-center max-w-11/12 mx-auto mt-12">
        <h1 className="font-bold text-3xl lg:text-5xl mb-4">Trending Apps</h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-6">
            {trendingAppsData.map(app => (
              <App key={app.id} app={app}></App>
            ))}
          </div>
        )}

        <div
          onClick={() => navigate(`/apps`)}
          className="btn mt-6 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] mb-8"
        >
          Show All
        </div>
        <div className="lg:hidden">
          <States></States>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
