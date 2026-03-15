import React from 'react';
import './Marquee.css'; // We'll create this CSS file

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
    { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D' },
    { name: 'Angular', icon: 'angularjs', color: '#DD0031' }
  ];

  // Duplicate the array to create seamless loop
  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <div className="marquee-container">
      <h1 className="marquee-title">my stack</h1>
      <div className="marquee-content">
        <div className="marquee-track">
          {marqueeItems.map((tech, index) => (
            <div key={index} className="marquee-item">
              <i className={`devicon-${tech.icon}-plain colored`}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;