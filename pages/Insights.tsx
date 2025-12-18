import React from 'react';
import { InsightPost } from '../types';
import { ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';

const posts: InsightPost[] = [
  {
    id: 1,
    title: "How people react to digital financial changes",
    date: "October 12, 2023",
    description: "An analysis of public sentiment following the latest policy updates in the fintech sector."
  },
  {
    id: 2,
    title: "Patterns in customer trust",
    date: "September 28, 2023",
    description: "What data signals tell us about building long-term reliability with Nigerian consumers."
  },
  {
    id: 3,
    title: "Short notes on public concerns in Nigeria",
    date: "September 15, 2023",
    description: "A weekly roundup of trending topics and digital chatter across major platforms."
  }
];

const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
       <div className="bg-white pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Blog</span>
          <h1 className="text-4xl font-bold text-primary">Insights and Updates</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-8 space-y-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-3">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read Article <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                  <div className="hidden md:block">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={20} />
                     </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="md:col-span-4 space-y-8">
             <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-4">Subscribe to updates</h3>
                <p className="text-blue-200 text-sm mb-6">Get the latest signals and patterns delivered to your inbox monthly.</p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 mb-4"
                />
                <Button variant="secondary" className="w-full">Subscribe</Button>
             </div>

             <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft">
                <h3 className="font-bold text-lg mb-4 text-primary">Topics</h3>
                <div className="flex flex-wrap gap-2">
                   {['Fintech', 'Policy', 'Trust', 'Data', 'Nigeria', 'Consumer'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full hover:bg-secondary/10 hover:text-secondary cursor-pointer transition-colors">
                         {tag}
                      </span>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Insights;