import React, { useState } from "react";
import genpay from "../../assets/images/genpayshot.png";
import xrepublik from "../../assets/images/xrepublik.png";
import quickship from "../../assets/images/quickshipp.png";
import tekuvo from "../../assets/images/tekuvv.png";
import deadline from "../../assets/images/deadline.jfif";
import bookit from "../../assets/images/bookitt.png";

const CardsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const mockups = [
    {
      id: 1,
      name: "genpay",
      category: "event ticketing",
      status: "live",
      image: genpay,
      alt: "Genpay NG",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "X-republik",
      category: "entertainment",
      status: "development",
      image: xrepublik,
      alt: "X-republik",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      name: "quickship",
      category: "logistics",
      status: "live",
      image: quickship,
      alt: "QuickShip",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      name: "tekuvo",
      category: "agency",
      status: "live",
      image: tekuvo,
      alt: "Tekuvo",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      name: "bip",
      category: "saas",
      status: "development",
      image: deadline,
      alt: "bip Mockup",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      name: "bookit",
      category: "hotel management",
      status: "development",
      image: bookit,
      alt: "Bookit Mockup",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <div className="header-container bg-black min-h-screen py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Minimalist header */}
        <div className=" mb-20">
          <h2 className=" text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            works
          </h2>
          <p className="text-gray-400 text-lg font-light">
            selected projects & experiments
          </p>
        </div>

        {/* Masonry-inspired grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(mockup.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Container */}
              <div className="flex flex-col h-full">
                {/* Meta Info - Top Bar */}
                <div className="flex items-center justify-between mb-6 px-1">
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {mockup.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                      {mockup.status}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${
                      mockup.status === "live"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`} />
                  </div>
                </div>

                {/* Image Container - Core Visual */}
                <div className="relative overflow-hidden rounded-lg mb-5 bg-gray-900 flex-grow">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${mockup.color} z-10 pointer-events-none`}
                  />

                  {/* Image */}
                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full h-64 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Floating label on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20`}
                  >
                    <p className="text-gray-200 text-sm font-light">
                      {mockup.category}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line with status color */}
                <div className="h-px bg-gradient-to-r from-gray-700 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-24 pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm font-light max-w-2xl">
            Each project represents a unique blend of strategy, design, and
            execution. Click to explore more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;