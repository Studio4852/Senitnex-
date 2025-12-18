
import React from 'react';
import { Post } from '../types';
import { CalendarIcon, ArrowDiagonal, ChevronRight } from './Icons';

interface BlogCardProps {
  post: Post;
  isFirst?: boolean;
  onClick: (post: Post) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, isFirst, onClick }) => {
  return (
    <div 
      onClick={() => onClick(post)}
      className={`group cursor-pointer relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 ${isFirst ? 'border-l-4 border-l-[#166534]' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <CalendarIcon />
          <span>{post.date}</span>
        </div>
        
        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isFirst ? 'bg-[#166534] text-white' : 'bg-gray-50 text-gray-300 group-hover:bg-gray-100 group-hover:text-gray-400'}`}>
          <ArrowDiagonal color={isFirst ? "white" : "currentColor"} />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#166534] leading-tight mb-3 group-hover:text-[#14532d] transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
        {post.excerpt}
      </p>

      <div className="inline-flex items-center text-sm font-bold text-[#166534] hover:underline">
        Read Article <ChevronRight />
      </div>
    </div>
  );
};
