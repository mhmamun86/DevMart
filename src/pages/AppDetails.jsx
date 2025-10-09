import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import { shortNumber } from '../utils/apps';
import NotFound from '../components/NotFound';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';
import { getApps, updateApps } from '../utils/localStorage';
import Spinner from '../components/Spinner';
import useApps from '../Hooks/useFetchData';

const AppDetails = () => {
  const data = useApps();
  const { apps, loading } = data;
  const { id } = useParams();
  useEffect(() => {
    if (!/^\d+$/.test(id)) {
      throw new Response('Invalid app ID');
    }
  }, [id]);
  const appId = parseInt(id);
  const [installed, setInstalled] = useState(() => getApps());

  if (loading) return <Spinner></Spinner>;
  const app = apps.find(el => el.id === appId);
  console.log(app.id);
  if (!app) {
    return <NotFound></NotFound>;
  }

  const isDuplicate = installed.some(el => el.id === app.id);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app;

  const ratingData = ratings.slice().reverse();

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="flex-col flex md:flex-row items-center gap-10 ">
        <div className="bg-white rounded-tl-4xl rounded-br-4xl flex justify-center items-center">
          <img className="h-[300px] md:h-[350px]" src={image} alt={title} />
        </div>
        <div className="">
          <div className="justify-center flex-col items-center text-center md:text-left md:block">
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p>
              <span className="text-[#627382] text-xl">Developed by : </span>{' '}
              <span className="text-gradiant font-bold">{companyName}</span>
            </p>
          </div>
          <div className="mt-7 border-t-1 opacity-20 "></div>
          <div className="flex gap-5 md:gap-10 lg:gap-14 my-2">
            <div className="py-7 space-y-2">
              <img className="h-8" src={downloadIcon} alt="download" />
              <p className="opacity-80">Downloads</p>
              <span className=" text-2xl md:text-4xl font-extrabold">
                {shortNumber(downloads)}
              </span>
            </div>
            <div className="py-7 space-y-2">
              <img className="h-8" src={ratingIcon} alt="ratings" />
              <p className="opacity-80">Average Ratings</p>
              <span className="text-2xl md:text-4xl font-extrabold">
                {ratingAvg}
              </span>
            </div>
            <div className="py-7 space-y-2">
              <img className="h-8" src={reviewIcon} alt="reviews" />
              <p className="opacity-80">Total Reviews</p>
              <span className="text-2xl md:text-4xl font-extrabold">
                {shortNumber(reviews)}
              </span>
            </div>
          </div>
          <button
            onClick={() => updateApps(app, installed, setInstalled)}
            disabled={isDuplicate}
            className="btn bg-[#00D390] px-5 py-3.5 text-white font-semibold text-xl"
          >
            {' '}
            {isDuplicate ? 'Installed' : `Install Now (${size} MB)`}{' '}
          </button>
        </div>
      </div>
      <div className="my-7 border-t-1 opacity-20 "></div>
      <div className="mb-15" style={{ width: '100%', height: 300 }}>
        <h2 className="font-semibold text-2xl mb-2">Ratings</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={ratingData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 14 }}
              width={70}
            />
            <XAxis type="number" />
            <Tooltip />
            <Bar
              dataKey="count"
              barSize={20}
              radius={[0, 10, 10, 0]}
              fill="#FF8811"
              activeBar={<Rectangle fill="#FF8811" stroke="#FF8811" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="my-7 border-t-1 opacity-20 "></div>
      <div className="mt-7 mb-20">
        <h2 className="font-semibold text-2xl mb-6">Description</h2>
        <p className="text-[#627382] text-xl">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
