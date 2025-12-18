
import React, { useState } from 'react';
import { TOPICS } from '../constants';

export const Sidebar: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div className="space-y-8">
      {/* Subscribe Card */}
      <div className="bg-[#1e4d3b] text-white p-8 rounded-3xl">
        <h3 className="text-xl font-bold mb-3">Subscribe to updates</h3>
        <p className="text-sm text-green-50/70 mb-6 leading-relaxed">
          Get the latest signals and patterns delivered to your inbox monthly.
        </p>
        
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full bg-[#2a5a48] border border-[#3a6a58] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-green-100/30"
          />
          <button
            type="submit"
            className="w-full bg-[#34a853] hover:bg-[#2d9648] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Topics Card */}
      <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Topics</h3>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-full text-xs font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
