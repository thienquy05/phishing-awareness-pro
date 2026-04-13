"use client";

import React, { useState } from 'react';

export default function PracticeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/logs', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsSubmitting(false);
        // Reset after 5 seconds to let them try again if they want
        setTimeout(() => {
          setIsSuccess(false);
          (e.target as HTMLFormElement).reset();
        }, 5000);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="user_email" className="block text-base font-bold text-gray-700 mb-2">
          Your Email Address
        </label>
        <input 
          type="email" 
          name="user_email" 
          id="user_email" 
          required
          disabled={isSubmitting || isSuccess}
          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 text-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all placeholder-gray-400 text-lg disabled:opacity-50"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100">
        <div className="flex items-center h-6">
          <input 
            type="checkbox" 
            name="check_box" 
            id="check_box" 
            value="1"
            disabled={isSubmitting || isSuccess}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div className="ml-3">
          <label htmlFor="check_box" className={`text-sm text-blue-900 font-medium ${isSubmitting || isSuccess ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>
            I understand this is just a safe practice test. Show me how easy it is to find my location!
          </label>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting || isSuccess}
        className={`w-full text-white text-xl font-bold py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg flex justify-center items-center overflow-hidden relative group ${
          isSuccess 
            ? 'bg-green-500 shadow-green-500/40' 
            : isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        <div className={`transition-all duration-300 flex items-center space-x-2 ${isSubmitting || isSuccess ? 'opacity-0 translate-y-8 absolute' : 'opacity-100 translate-y-0 relative'}`}>
          <span>Run Safe Practice Test</span>
        </div>

        {/* Speedy Turtle Delivery Animation instead of paper plane */}
        <div className={`absolute inset-0 flex items-center overflow-hidden transition-opacity duration-300 ${isSubmitting && !isSuccess ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-blue-500/50 animate-pulse"></div>
          <div className="w-full flex items-center h-full relative z-10 animate-[drive_2s_ease-in-out_infinite]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white filter drop-shadow-md">
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
              <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold tracking-wider text-white ml-2 uppercase">Sending Email...</span>
          </div>
        </div>

        {/* Success State */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isSuccess ? 'opacity-100 delay-300' : 'opacity-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Check your email!
        </div>
      </button>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drive {
          0% { transform: translateX(-40%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </form>
  );
}
