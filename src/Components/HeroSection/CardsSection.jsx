import React from "react";
import genpay from "../../assets/images/genpayshot.png";
const CardsSection = () => {
  const mockups = [
    {
      id: 1,
      labels: ["genpay", "event ticketing", "live"],
      image: genpay,
      alt: "Genpay NG",
    },
    {
      id: 2,
      labels: ["X-republik", "entertainment", "development"],
      image: "https://picsum.photos/id/1018/1200/900",
      alt: "Shtender Mockup",
    },
    {
      id: 3,
      labels: ["QuickShip", "logistics", "live"],
      image: "https://picsum.photos/id/102/1200/900",
      alt: "Studio Mockup",
    },
    {
      id: 4,
      labels: ["tekuvo", "agency", "live"],
      image: "https://picsum.photos/id/201/1200/900",
      alt: "Mobile App Mockup",
    },
    {
      id: 5,
      labels: ["bip", "saas", "development"],
      image: "https://picsum.photos/id/29/1200/900",
      alt: "Packaging Mockup",
    },
    {
      id: 6,
      labels: ["surge", "Billboard", "2025"],
      image: "https://picsum.photos/id/133/1200/900",
      alt: "Billboard Mockup",
    },
  ];

  return (
    <div className="header-container bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Big "Works" header at top left */}
        <h2 className="text-[50px] font-bold tracking-[-3px] text-white mb-14 text-left">
          works
        </h2>

        {/* Grid: 2 cards per row on tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="group">
              {/* LARGER rectangular label bar (professional height + extra width) */}
              <div className=" px-10 py-8 flex justify-between items-center rounded-none">
                {/* Left: Name only (plain white text) */}
                <span className="font-semibold text-xl tracking-tighter text-white">
                  {mockup.labels[0]}
                </span>

                {/* Right: TWO professional rectangular button-style pills */}
                <div className="flex gap-6">
                  {mockup.labels.slice(1, 3).map((label, index) => {
                    const pillClasses =
                      index === 0
                        ? "text-white"
                        : " text-orange-500";

                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center justify-center px-12 py-4 rounded-none text-base font-semibold tracking-tight ${pillClasses}`}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Image shifted down */}
              <div className="relative mt-6 overflow-hidden shadow-2xl bg-zinc-900">
                <img
                  src={mockup.image}
                  alt={mockup.alt}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;