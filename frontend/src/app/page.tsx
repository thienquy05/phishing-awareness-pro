import React from 'react';
import PracticeForm from '../components/PracticeForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 font-sans">
      <div className="max-w-4xl w-full">
        
        {/* Friendly header */}
        <div className="text-center mb-12">
          <div className="inline-flex justify-center items-center w-24 h-24 bg-blue-100 rounded-full mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Stay Safe Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hackers use sneaky links to try and trick you. Let's learn how to spot them so you can browse the internet safely and confidently!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Educational tips */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-3 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Things to watch out for:
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-inner border border-yellow-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-gray-800 text-lg mb-1">Scary or Urgent Messages</strong>
                  <span className="text-gray-600 leading-snug block">Emails that say "Account Suspended!" or "Act Now!" are usually trying to scare you into clicking without thinking.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-inner border border-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-gray-800 text-lg mb-1">Strange Website Addresses</strong>
                  <span className="text-gray-600 leading-snug block">Always rest your mouse (hover) over a link to see where it really goes before clicking it. Wait a moment to check!</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-inner border border-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-gray-800 text-lg mb-1">Fake Sender Names</strong>
                  <span className="text-gray-600 leading-snug block">Just because the email name says "Bank Support" doesn't mean it's actually your bank. Look closely at the sender's real email address.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden flex flex-col justify-center">
            {/* Friendly decorative top border */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 to-sky-300"></div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Try a safe practice test</h2>
            <p className="text-gray-600 mb-8 border-b border-gray-100 pb-6">
              Curious what happens when you click a bad link? Enter an email below to safely see what details hackers can instantly collect.
            </p>

            <PracticeForm />
          </div>

        </div>
        
        <div className="mt-12 text-center text-gray-400 text-sm flex items-center justify-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p> Built to help keep you and your family safe online.</p>
        </div>

      </div>
    </div>
  );
}
