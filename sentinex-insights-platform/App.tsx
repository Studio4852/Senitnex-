
import React, { useState } from 'react';
import { Logo, EmailIcon, LocationIcon } from './components/Icons';
import { BlogCard } from './components/BlogCard';
import { Sidebar } from './components/Sidebar';
import { PostDetail } from './components/PostDetail';
import { Post } from './types';
import { INITIAL_POSTS } from './constants';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeTab, setActiveTab] = useState('Insights');

  const navItems = ['Home', 'About', 'Product', 'Consulting', 'Insights', 'Contact'];

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={handleBack}>
            <Logo />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  if (item === 'Insights') handleBack();
                }}
                className={`relative text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-lg ${
                  activeTab === item 
                    ? 'text-[#166534] bg-green-50' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {item}
                {activeTab === item && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#166534] rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section - Only show when no post is selected */}
      {!selectedPost && (
        <section className="bg-white border-b border-gray-50 pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <span className="text-xs font-bold tracking-widest text-[#166534] uppercase mb-4 block animate-pulse">
              OUR BLOG
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="text-5xl font-bold text-[#166534] tracking-tight">
                Insights and Updates
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Content Grid */}
      <main className={`max-w-7xl mx-auto px-4 ${selectedPost ? 'py-12' : 'py-16'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Feed or Post Detail */}
          <div className="lg:col-span-2 space-y-8">
            {selectedPost ? (
              <PostDetail post={selectedPost} onBack={handleBack} />
            ) : (
              posts.map((post, idx) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  isFirst={idx === 0} 
                  onClick={handlePostClick}
                />
              ))
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </aside>
        </div>
      </main>

      {/* Footer - Recreated to match screenshot exactly */}
      <footer className="bg-[#14532d] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Column 1: Brand & Info */}
            <div className="md:col-span-5 space-y-6">
              <Logo color="text-white" iconBg="bg-white/10 border border-white/20" />
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                Clear insight for Nigeria. SentiNEX helps teams understand public sentiment through data-aware insights, transforming noise into actionable strategy.
              </p>
              <p className="text-[#fbbf24] font-medium text-sm">
                Built for Nigeria with care.
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className="md:col-span-3 space-y-6">
              <h4 className="text-lg font-bold">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Platform</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consulting</a></li>
                <li className="flex items-center gap-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
                  <span className="bg-white/10 text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-white/60">Future</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-lg font-bold">Contact</h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-3 text-gray-300">
                  <EmailIcon />
                  <a href="mailto:info@sentinex.co" className="hover:text-white transition-colors">info@sentinex.co</a>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <LocationIcon />
                  <span>Lagos, Nigeria</span>
                </li>
              </ul>
              <div className="pt-4">
                <button className="px-6 py-2.5 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © 2025 SentiNEX. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
