import React from 'react';

const Marquee = () => {
  const techStacks = [
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'Node.js', icon: 'nodejs', color: '#339933' },
    { name: 'Python', icon: 'python', color: '#3776AB' },
    { name: 'HTML5', icon: 'html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'css3', color: '#1572B6' },
    { name: 'Git', icon: 'git', color: '#F05032' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'AWS', icon: 'amazonwebservices', color: '#FF9900' },
  ];

  const marqueeItems = [...techStacks, ...techStacks, ...techStacks]; // Triple for smooth loop

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          my stack
        </h2>
        <p className="text-gray-400 text-lg font-light">
          technologies I work with
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="inline-flex items-center gap-3 mx-6 px-6 py-3 bg-gray-900/50 rounded-full border border-gray-800"
            >
              <i className={`devicon-${tech.icon}-plain text-2xl`} style={{ color: tech.color }} />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;