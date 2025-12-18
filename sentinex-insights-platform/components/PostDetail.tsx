
import React from 'react';
import { Post } from '../types';
import { CalendarIcon } from './Icons';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold text-[#166534] mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Insights
      </button>

      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
        <CalendarIcon />
        <span>{post.date}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-[#166534] leading-tight mb-8">
        {post.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-green-50 text-[#166534] rounded-full text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
        <p className="font-medium text-xl text-gray-800 mb-8 italic border-l-4 border-green-100 pl-6">
          {post.excerpt}
        </p>
        <div className="whitespace-pre-wrap">
          {post.content}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#166534] font-bold">
          SN
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">SentiNEX Insights Team</p>
          <p className="text-xs text-gray-500">Analysis & Research Unit</p>
        </div>
      </div>
    </div>
  );
};
