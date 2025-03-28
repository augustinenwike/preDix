"use client";

import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import StatsCard from '../components/StatsCard';
import Link from 'next/link';
import { useReadAppContract } from '@/components/useContract';

const HomePage: React.FC = () => {
  const treasuryAmount = useReadAppContract("TIMELOCK_THRESHOLD",[]) as {loading: boolean, data: string};
  console.log("Treasury Amount:", treasuryAmount ? treasuryAmount.data : "just dey play");

  const featuredEvents = [
    {
      title: "Nations League Cup Semi Final: Spain vs France",
      options: ["Spain Win", "Draw", "France Win"],
      poolId: 123,
      timeRemaining: "2 days left",
      status: "open"
    },
    {
      title: "Bitcoin Price Prediction - March 2025",
      options: ["Above $90k", "Between $85k-$90k", "Below $85k"],
      poolId: 125,
      timeRemaining: "5 days left",
      status: "open"
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 px-20">
        {/* Hero Section */}
        <div className="bg-[#127073] text-white rounded-xl p-12 text-center">
          <h1 className="text-6xl font-bold mb-2">Predict, Stake, Win</h1>
          <p className="text-xl mb-6 text-gray-300">Participate in prediction markets and win rewards</p>
          <button className="bg-white text-[#127073] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 mt-5">
           <Link href="/events"> Stake Now</Link>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          <StatsCard title="Total Events" value="1,234" />
          <StatsCard title="Active Users" value="8,543" />
          <StatsCard title="Total Staked" value="$2.4M" />
        </div>

        {/* Featured Events */}
        <h2 className="text-4xl mt-20 font-bold text-gray-900">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredEvents.map((event, index) => (
            <EventCard key={index} {...event} status={event.status as "open" | "closed" | "resolved"}/>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <Link href="/events"><p className="text-[#127073] px-8 py-3 underline cursor-pointer rounded-lg font-semibold hover:bg-gray-100 mt-5">See More</p></Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;