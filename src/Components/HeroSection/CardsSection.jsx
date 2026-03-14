import React from 'react';

const CardsSection = () => {
  const mockups = [
    {
      id: 1,
      labels: ['Vanguard', 'Crypto', '2025', 'Fabric'],
      image: 'https://picsum.photos/id/1015/1200/900',
      alt: 'Building Wall Mockup'
    },
    {
      id: 2,
      labels: ['Fintech', '2024'],
      image: 'https://picsum.photos/id/1018/1200/900',
      alt: 'Shtender Mockup'
    },
    {
      id: 3,
      labels: ['Atelier', 'Design', '2025'],
      image: 'https://picsum.photos/id/102/1200/900',
      alt: 'Studio Mockup'
    },
    {
      id: 4,
      labels: ['Lumina', 'App', '2026'],
      image: 'https://picsum.photos/id/201/1200/900',
      alt: 'Mobile App Mockup'
    },
    {
      id: 5,
      labels: ['Forge', 'Packaging', '2024'],
      image: 'https://picsum.photos/id/29/1200/900',
      alt: 'Packaging Mockup'
    },
    {
      id: 6,
      labels: ['Pulse', 'Billboard', '2025'],
      image: 'https://picsum.photos/id/133/1200/900',
      alt: 'Billboard Mockup'
    }
  ];

  return (
    <div className="bg-black py-16 px-6 ">
      <div className="max-w-7xl mx-auto ">
        {/* NEW: Big "Works" header at top left (exactly as requested) */}
        <h2 className="text-[50px] font-bold tracking-[-3px] text-white mb-14 text-left">
          Works
        </h2>

        {/* Grid: exactly 2 cards per row on tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="group">
              {/* Each card has its OWN top label bar */}
              <div className="bg-zinc-950 border border-white/10 border-b-0 rounded-t-3xl px-6 py-4 flex flex-wrap items-center gap-x-8 text-white text-[15px] font-medium tracking-tighter">
                {mockup.labels.map((label, index) => (
                  <span
                    key={index}
                    className={index === 0 ? 'font-semibold text-lg' : 'text-white/70'}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-b-3xl shadow-2xl border border-white/10 bg-zinc-900">
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