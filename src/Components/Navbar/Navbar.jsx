'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navSections = [
    {
      title: 'Work',
      links: ['Projects', 'Case Studies'],
    },
    {
      title: 'About',
      links: ['Biography', 'Experience'],
    },
    {
      title: 'Projects',
      links: ['Portfolio', 'Collaborations'],
    },
  ];

  return (
    <div className="flex justify-center pt-6 px-4">
      {/* Navbar Container */}
      <div
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out px-3 sm:px-4 ${
          isOpen ? 'w-full max-w-4xl' : 'w-full max-w-2xl'
        }`}
      >
        {/* Main Navbar */}
        <div
          className="backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
          }}
        >
          {/* Top Section */}
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-white/90 font-semibold text-base sm:text-lg tracking-wide">
              AJEJOHNSON
            </div>

            {/* Contact Button - Hidden on Mobile */}
            <button
              className="hidden sm:block px-5 py-2 rounded-lg text-white/80 text-sm font-medium transition-all duration-200 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              Contact Me
            </button>

            {/* Contact Button - Mobile Version */}
            <div className="sm:hidden w-10" />
          </div>

          {/* Expanded Section */}
          {isOpen && (
            <div
              className="border-t border-white/5 px-4 sm:px-6 py-4 sm:py-6 animate-in fade-in slide-in-from-top-2 duration-300"
              style={{
                animation: 'slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Navigation Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {navSections.map((section, index) => (
                  <div
                    key={section.title}
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 border border-white/5 hover:border-white/10 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,${0.02 + index * 0.01}) 0%, rgba(255,255,255,${0.01 + index * 0.005}) 100%)`,
                      animation: `slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`,
                    }}
                  >
                    {/* Section Title */}
                    <h3 className="text-white/90 font-semibold text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-white transition-colors">
                      {section.title}
                    </h3>

                    {/* Links */}
                    <div className="space-y-1 sm:space-y-2">
                      {section.links.map((link) => (
                        <div
                          key={link}
                          className="flex items-center justify-between text-white/60 hover:text-white/90 transition-colors duration-200 text-xs sm:text-sm cursor-pointer group/link bg-transparent"
                        >
                          <span className="bg-transparent">{link}</span>
                          <ArrowRight
                            size={14}
                            className="opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all duration-200 bg-transparent flex-shrink-0"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <button className="w-full sm:hidden px-4 py-2.5 rounded-lg text-white/80 text-xs font-medium transition-all duration-200 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 mt-2">
                Contact Me
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-300"
          onClick={toggleMenu}
          style={{
            animation: 'fadeIn 0.3s ease-out',
          }}
        />
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
