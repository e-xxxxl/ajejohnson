'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import NavPage from '../Pages/NavPage';

export default function Section1() {
  const [rotatingWord, setRotatingWord] = useState(0);
  const words = ['System Builder', 'Problem Solver', 'Full-Stack Dev', 'Web Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        {/* Soft animated radial glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'slideGrid 20s linear infinite'
        }} />
      </div>
      
      {/* NavPage - Fixed positioning to not affect centering */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavPage/>
      </div>

      {/* Content Container - Perfectly centered */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          {/* Badge */}
          <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <Zap size={16} className="text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-white/70">
              Optimized for performance. And sarcasm.
            </span>
          </div>

          {/* Main Headline with Rotating Word */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Ajejohnson Emmanuel
            </h1>
            <div className="relative h-16 sm:h-20 lg:h-28 mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <h2
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-700"
                  key={rotatingWord}
                  style={{
                    animation: 'fadeInOut 4s ease-in-out',
                  }}
                >
                  {words[rotatingWord]}
                </h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/60">
              Building intelligent web systems that actually work
            </p>
          </div>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/50 mb-10 sm:mb-14 leading-relaxed">
           I build web apps that just work using React, Node.js, and reliable backend systems. My goal is simple: fast, clean, and enjoyable experiences. Currently available Contact me.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
            <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/20 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1">
              Let's Build Together
            </button>
          </div>

          {/* Animated Code Snippet */}
          <div className="max-w-md mx-auto p-4 sm:p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
            <pre className="text-xs sm:text-sm text-white/70 font-mono overflow-x-auto">
              <span className="text-purple-400">const</span> ajejohnson = {'{'}
              <br />
              {'  '}<span className="text-blue-400">role</span>: <span className="text-green-400">"Full-Stack Developer"</span>,
              <br />
              {'  '}<span className="text-blue-400">builds</span>: [<span className="text-green-400">"Web Apps"</span>, <span className="text-green-400">"APIs"</span>, <span className="text-green-400">"Systems"</span>],
              <br />
              {'  '}<span className="text-blue-400">status</span>: <span className="text-green-400">"Building cool things"</span>
              <br />
              {'}'}
            </pre>
          </div>

          {/* Footer text */}
          <p className="mt-16 text-xs sm:text-sm text-white/40 animate-bounce" style={{ animationDuration: '3s' }}>
            ↓ Scroll carefully. Things get interesting.
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideGrid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}