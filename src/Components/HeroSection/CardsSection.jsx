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
      alt: "Genpay NG payment platform interface",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "X-republik",
      category: "entertainment",
      status: "development",
      image: xrepublik,
      alt: "X-republik entertainment platform",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      name: "quickship",
      category: "logistics",
      status: "live",
      image: quickship,
      alt: "QuickShip logistics dashboard",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      name: "tekuvo",
      category: "agency",
      status: "live",
      image: tekuvo,
      alt: "Tekuvo agency website",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      name: "bip",
      category: "saas",
      status: "development",
      image: deadline,
      alt: "BIP SaaS platform mockup",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      name: "bookit",
      category: "hotel management",
      status: "development",
      image: bookit,
      alt: "Bookit hotel management interface",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section id="works" className="bg-black min-h-screen py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            works
          </h2>
          <p className="text-gray-400 text-lg font-light">
            selected projects & experiments
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((mockup) => (
            <article
              key={mockup.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(mockup.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col h-full">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {mockup.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {mockup.status}
                    </span>
                    <div 
                      className={`w-2 h-2 rounded-full ${
                        mockup.status === "live"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-900 aspect-video">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${mockup.color} z-10 pointer-events-none`}
                    aria-hidden="true"
                  />

                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Floating label */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20`}
                  >
                    <p className="text-gray-200 text-sm font-light">
                      {mockup.category}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-px bg-gradient-to-r from-gray-700 to-transparent" />
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm font-light max-w-2xl">
            Each project represents a unique blend of strategy, design, and
            execution. Click to explore more details.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default CardsSection;