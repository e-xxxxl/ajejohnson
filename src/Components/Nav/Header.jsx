import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-black pt-4 sm:pt-6 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Responsive EMMANUEL - smaller on mobile, huge on desktop */}
        <h1 className="
          text-6xl        /* Mobile: 60px */
          sm:text-7xl     /* Small tablet: 72px */
          md:text-8xl     /* Tablet: 96px */
          lg:text-9xl     /* Desktop: 128px */
          xl:text-[12rem] /* Large desktop: ~192px */
          font-bold
          text-white
          leading-none
          mb-4
          sm:mb-5
          md:mb-6
          tracking-tight
        ">
          EMMANUEL
        </h1>
        
        {/* Responsive links - smaller gap on mobile */}
        <nav className="
          flex
          gap-4          /* Mobile */
          sm:gap-6       /* Small tablet */
          md:gap-8       /* Tablet */
          lg:gap-10      /* Desktop */
          text-sm        /* Mobile */
          sm:text-base   /* Tablet */
          md:text-lg     /* Desktop */
          pb-6
          sm:pb-8
          md:pb-10
        ">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors">
            about
          </button>
          <button onClick={() => scrollToSection('works')} className="text-gray-400 hover:text-orange-500 transition-colors">
            works
          </button>
          <button onClick={() => scrollToSection('fun')} className="text-gray-400 hover:text-orange-500 transition-colors">
            fun
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-orange-500 transition-colors">
            contact
          </button>
        </nav>
        
        {/* Optional subtle separator line */}
        <div className="w-full h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
      </div>
    </header>
  )
}

export default Header