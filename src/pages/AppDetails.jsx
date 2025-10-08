import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useFetchData';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import reviewIcon from '../assets/icon-review.png';
import { shortNumber } from '../utils/apps';
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

const AppDetails = () => {
  const data = useApps();
  const { apps, loading, error } = data;
  const { id } = useParams();
  const appId = parseInt(id);
  if (loading) return <span>Loading....</span>;
  const app = apps.find(el => el.id === appId);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app;

  const ratingData = ratings.slice().reverse();

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="flex-col flex md:flex-row items-center gap-3.5 ">
        <div>
          <img className="h-[300px] md:h-[350px]" src={image} alt={title} />
        </div>
        <div className="">
          <div>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p>
              <span className="text-[#627382] text-xl">Developed by : </span>{' '}
              <span className="text-gradiant font-bold">{companyName}</span>
            </p>
          </div>
          <div className="mt-7 border-t-1 opacity-20 "></div>
          <div className="flex gap-2 md:gap-8">
            <div className="py-7 space-y-2">
              <img className="h-10" src={downloadIcon} alt="download" />
              <p className="opacity-80">Downloads</p>
              <span className=" text-2xl md:text-4xl font-extrabold">
                {shortNumber(downloads)}
              </span>
            </div>
            <div className="py-7 space-y-2">
              <img className="h-10" src={ratingIcon} alt="ratings" />
              <p className="opacity-80">Average Ratings</p>
              <span className="text-2xl md:text-4xl font-extrabold">
                {ratingAvg}
              </span>
            </div>
            <div className="py-7 space-y-2">
              <img className="h-10" src={reviewIcon} alt="reviews" />
              <p className="opacity-80">Total Reviews</p>
              <span className="text-2xl md:text-4xl font-extrabold">
                {shortNumber(reviews)}
              </span>
            </div>
          </div>
          <button className="btn bg-[#00D390] px-5 py-3.5 text-white font-semibold text-xl">
            {' '}
            Install Now ({size} MB){' '}
          </button>
        </div>
      </div>
      <div className="my-7 border-t-1 opacity-20 "></div>
      <div style={{ width: '100%', height: 300 }}>
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
    </div>
  );
};

export default AppDetails;
