import React, { useState, useEffect, useRef } from "react";
import gif1 from "../../assets/images/gif1.gif";
import gif2 from "../../assets/images/gif2.gif";
import gif3 from "../../assets/images/gif3.gif";
import gif4 from "../../assets/images/gif4.gif";
import gif5 from "../../assets/images/gif5.gif";

const MainSection = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const gifs = [gif1, gif2, gif3, gif4, gif5];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 lg:justify-between">
          {/* GIF Container */}
          <div
            className={`
              w-full max-w-[320px] md:max-w-[380px] lg:max-w-[400px] flex-shrink-0
              transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={gifs[currentGifIndex]}
                alt={`Emmanuel animation ${currentGifIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div
            className={`
              max-w-xl text-center lg:text-left
              transition-all duration-1000 delay-300 ease-out
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-tight font-light tracking-wide">
              I'm Ajejohnson Emmanuel, a full-stack developer passionate about building
              modern web applications. I help businesses turn ideas into
              powerful digital products… and spend a healthy amount of time
              convincing bugs to leave my code.
            </p>

            {/* Decorative line */}
            <div
              className={`
                w-20 h-0.5 bg-orange-500 mt-6 mx-auto lg:mx-0
                transition-all duration-1000 delay-700 ease-out
                ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;