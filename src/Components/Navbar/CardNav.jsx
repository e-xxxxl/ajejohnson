// import { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// // use your own icon import if react-icons is not available
// import { GoArrowUpRight } from 'react-icons/go';

// const CardNav = ({
//   logoText,
//   logoAlt = 'Logo',
//   items,
//   className = '',
//   ease = 'power3.out',
//   baseColor = '#fff',
//   menuColor,
//   buttonBgColor,
//   buttonTextColor
// }) => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navRef = useRef(null);
//   const cardsRef = useRef([]);
//   const tlRef = useRef(null);

//   const calculateHeight = () => {
//     const navEl = navRef.current;
//     if (!navEl) return 260;

//     const isMobile = window.matchMedia('(max-width: 768px)').matches;
//     if (isMobile) {
//       const contentEl = navEl.querySelector('.card-nav-content');
//       if (contentEl) {
//         const wasVisible = contentEl.style.visibility;
//         const wasPointerEvents = contentEl.style.pointerEvents;
//         const wasPosition = contentEl.style.position;
//         const wasHeight = contentEl.style.height;

//         contentEl.style.visibility = 'visible';
//         contentEl.style.pointerEvents = 'auto';
//         contentEl.style.position = 'static';
//         contentEl.style.height = 'auto';

//         contentEl.offsetHeight;

//         const topBar = 60;
//         const padding = 16;
//         const contentHeight = contentEl.scrollHeight;

//         contentEl.style.visibility = wasVisible;
//         contentEl.style.pointerEvents = wasPointerEvents;
//         contentEl.style.position = wasPosition;
//         contentEl.style.height = wasHeight;

//         return topBar + contentHeight + padding;
//       }
//     }
//     return 260;
//   };

//   const createTimeline = () => {
//     const navEl = navRef.current;
//     if (!navEl) return null;

//     gsap.set(navEl, { height: 60, overflow: 'hidden' });
//     gsap.set(cardsRef.current, { y: 50, opacity: 0 });

//     const tl = gsap.timeline({ paused: true });

//     tl.to(navEl, {
//       height: calculateHeight,
//       duration: 0.4,
//       ease
//     });

//     tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

//     return tl;
//   };

//   useLayoutEffect(() => {
//     const tl = createTimeline();
//     tlRef.current = tl;

//     return () => {
//       tl?.kill();
//       tlRef.current = null;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ease, items]);

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       if (!tlRef.current) return;

//       if (isExpanded) {
//         const newHeight = calculateHeight();
//         gsap.set(navRef.current, { height: newHeight });

//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           newTl.progress(1);
//           tlRef.current = newTl;
//         }
//       } else {
//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           tlRef.current = newTl;
//         }
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isExpanded]);

//   const toggleMenu = () => {
//     const tl = tlRef.current;
//     if (!tl) return;
//     if (!isExpanded) {
//       setIsHamburgerOpen(true);
//       setIsExpanded(true);
//       tl.play(0);
//     } else {
//       setIsHamburgerOpen(false);
//       tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
//       tl.reverse();
//     }
//   };

//   const setCardRef = i => el => {
//     if (el) cardsRef.current[i] = el;
//   };

//   return (
//     <div
//       className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
//     >
//       <nav
//         ref={navRef}
//         className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
//         style={{ backgroundColor: baseColor }}
//       >
//         <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
//           <div
//             className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
//             onClick={toggleMenu}
//             role="button"
//             aria-label={isExpanded ? 'Close menu' : 'Open menu'}
//             tabIndex={0}
//             style={{ color: menuColor || '#000' }}
//           >
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
//               } group-hover:opacity-75`}
//             />
//             <div
//               className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                 isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
//               } group-hover:opacity-75`}
//             />
//           </div>

//             <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
//             <div className="logo-text font-bold text-lg" style={{ color: menuColor || '#000' }}>
//               {logoText || "ajejohnson's world"}
//             </div>
//           </div>

//           <button
//             type="button"
//             className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 items-center h-full font-medium cursor-pointer transition-colors duration-300"
//             style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
//           >
//             Contact me
//           </button>
//         </div>

//         <div
//           className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
//             isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
//           } md:flex-row md:items-end md:gap-[12px]`}
//           aria-hidden={!isExpanded}
//         >
//           {(items || []).slice(0, 3).map((item, idx) => (
//             <div
//               key={`${item.label}-${idx}`}
//               className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
//               ref={setCardRef(idx)}
//               style={{ backgroundColor: item.bgColor, color: item.textColor }}
//             >
//               <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
//                 {item.label}
//               </div>
//               <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
//                 {item.links?.map((lnk, i) => (
//                   <a
//                     key={`${lnk.label}-${i}`}
//                     className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
//                     href={lnk.href}
//                     aria-label={lnk.ariaLabel}
//                   >
//                     <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
//                     {lnk.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default CardNav;





import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  logoText,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(255, 255, 255, 0.15)', // Semi-transparent base
  menuColor = '#fff',
  buttonBgColor = 'rgba(255, 255, 255, 0.25)',
  buttonTextColor = '#fff',
  glassIntensity = 0.2, // 0 to 1 for blur intensity
  shimmer = true // Enable/disable shimmer effect
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const liquidRef = useRef(null);
  const shimmerRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 20;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Reset initial states with liquid effects
    gsap.set(navEl, { 
      height: 60, 
      overflow: 'hidden',
      backdropFilter: `blur(${20 * glassIntensity}px)`
    });
    
    gsap.set(cardsRef.current, { 
      y: 50, 
      opacity: 0,
      backdropFilter: 'blur(10px)'
    });
    
    // Liquid animation for the glass effect
    if (liquidRef.current) {
      gsap.set(liquidRef.current, {
        scaleX: 0,
        opacity: 0.3
      });
    }

    const tl = gsap.timeline({ paused: true });

    // Liquid expansion effect
    if (liquidRef.current) {
      tl.to(liquidRef.current, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 0);
    }

    // Main container expansion with enhanced blur
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease,
      backdropFilter: `blur(${25 * glassIntensity}px)`
    }, 0);

    // Cards animation with liquid-like easing
    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.6, 
      ease: 'back.out(1.2)',
      stagger: 0.08 
    }, '-=0.2');

    // Shimmer effect
    if (shimmer && shimmerRef.current) {
      tl.fromTo(shimmerRef.current,
        { x: '-100%' },
        { x: '100%', duration: 0.8, ease: 'power2.inOut' },
        '-=0.4'
      );
    }

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items, glassIntensity, shimmer]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      {/* Enhanced backdrop with gradient */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(255, 255, 255, 0.1) 100%)`,
            filter: 'blur(1px)'
          }}
        />
        
        {/* Liquid effect layer */}
        <div
          ref={liquidRef}
          className="absolute inset-0 origin-left rounded-2xl"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0.3) 50%, 
              transparent 100%)`,
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Shimmer effect */}
        {shimmer && (
          <div
            ref={shimmerRef}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.4) 50%, 
                transparent 100%)`,
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          />
        )}
      </div>

      <nav
        ref={navRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-2xl relative overflow-hidden will-change-[height,backdrop-filter] transition-all duration-300
          ${isHovering ? 'shadow-[0_20px_60px_rgba(255,255,255,0.15)]' : 'shadow-[0_10px_40px_rgba(255,255,255,0.1)]'}`}
        style={{
          backgroundColor: baseColor,
          backdropFilter: `blur(${20 * glassIntensity}px) saturate(180%)`,
          WebkitBackdropFilter: `blur(${20 * glassIntensity}px) saturate(180%)`,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `${isHovering ? '0 20px 60px rgba(255, 255, 255, 0.15)' : '0 10px 40px rgba(255, 255, 255, 0.1)'}, 
                     inset 0 1px 0 rgba(255, 255, 255, 0.2)`
        }}
      >
        {/* Top bar with enhanced glass effect */}
        <div 
          className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2] rounded-2xl"
          style={{
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none relative overflow-hidden rounded-lg p-2`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            {/* Hamburger background with glass effect */}
            <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300" />
            
            <div
              className={`hamburger-line relative w-[30px] h-[2px] bg-current transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-origin:50%_50%] z-10
                ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''} group-hover:scale-110`}
            />
            <div
              className={`hamburger-line relative w-[30px] h-[2px] bg-current transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-origin:50%_50%] z-10
                ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''} group-hover:scale-110`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none relative">
            {/* Logo background effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div 
              className="logo-text font-bold text-lg tracking-tight relative z-10 transition-all duration-300 hover:tracking-wide"
              style={{ 
                color: menuColor,
                textShadow: '0 2px 10px rgba(255, 255, 255, 0.3)'
              }}
            >
              {logoText || "ajejohnson's world"}
            </div>
          </div>

          <button
            type="button"
            className="card-nav-cta-button hidden md:inline-flex border-0 rounded-xl px-4 items-center h-full font-medium cursor-pointer transition-all duration-300 relative overflow-hidden group"
            style={{ 
              backgroundColor: buttonBgColor, 
              color: buttonTextColor,
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Button liquid effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Contact me</span>
          </button>
        </div>

        {/* Content area with enhanced glass cards */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col items-stretch gap-3 justify-start z-[1]
            ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}
            md:flex-row md:items-end md:gap-[14px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              ref={setCardRef(idx)}
              style={{ 
                backgroundColor: item.bgColor ? `${item.bgColor}CC` : 'rgba(255, 255, 255, 0.15)',
                color: item.textColor || '#fff',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Card liquid effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div 
                className="nav-card-label font-normal tracking-tight text-[18px] md:text-[22px] relative z-10 transition-all duration-300 group-hover:tracking-wide"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
              >
                {item.label}
              </div>
              
              <div className="nav-card-links mt-auto flex flex-col gap-1 relative z-10">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:gap-3 hover:opacity-90 text-[15px] md:text-[16px] group/link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    style={{ color: item.textColor || '#fff' }}
                  >
                    <GoArrowUpRight 
                      className="nav-card-link-icon shrink-0 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                      aria-hidden="true" 
                    />
                    <span className="relative">
                      {lnk.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;