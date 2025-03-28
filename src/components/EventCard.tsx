'use client';

import React, { useState } from 'react';

interface EventCardProps {
  title: string;
  options: string[];
  poolId: number;
  timeRemaining: string;
  status: 'open' | 'closed' | 'resolved';
}

const EventCard: React.FC<EventCardProps> = ({ title, options, poolId, timeRemaining, status }) => {
  const [stakeAmounts, setStakeAmounts] = useState<{ [key: number]: string }>({});
  const [isStaking, setIsStaking] = useState(false);

  const statusColors = {
    open: 'bg-green-100 text-green-800',
    closed: 'bg-yellow-100 text-yellow-800',
    resolved: 'bg-gray-100 text-gray-800',
  };

  const handleStakeAmountChange = (optionIndex: number, value: string) => {
    setStakeAmounts(prev => ({
      ...prev,
      [optionIndex]: value
    }));
  };

  const handleStake = async (optionIndex: number) => {
    if (!stakeAmounts[optionIndex] || isNaN(Number(stakeAmounts[optionIndex]))) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      setIsStaking(true);
      // Here you would call your stakePool contract function
      // Example:
      // await stakePool(
      //   poolId,
      //   BigInt(Number(stakeAmounts[optionIndex]) * 1e18), // Convert to wei
      //   optionIndex
      // );
      alert(`Successfully staked ${stakeAmounts[optionIndex]} on ${options[optionIndex]}`);
      setStakeAmounts(prev => ({ ...prev, [optionIndex]: '' }));
    } catch (error) {
      console.error('Staking failed:', error);
      alert('Staking failed. Please try again.');
    } finally {
      setIsStaking(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Pool ID: #{poolId}</p>
        <p className="text-sm text-gray-600">Time remaining: {timeRemaining}</p>
      </div>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
              <span className="text-black">{option}</span>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Amount to stake"
                className="flex-1 px-3 py-2 border border-[#127073]/50 rounded text-sm text-black"
                value={stakeAmounts[index] || ''}
                onChange={(e) => handleStakeAmountChange(index, e.target.value)}
                disabled={status !== 'open'}
              />
              <button
                className="px-3 py-2 bg-[#127073] text-white rounded hover:bg-[#127073] text-sm"
                onClick={() => handleStake(index)}
                disabled={status !== 'open' || isStaking || !stakeAmounts[index]}
              >
                {isStaking ? 'Staking...' : 'Stake'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;