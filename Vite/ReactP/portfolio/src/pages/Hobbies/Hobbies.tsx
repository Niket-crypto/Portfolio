import Grainient from "../../components/Gradient/Gradient";
import "./Hobbies.css";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";

const hobbiesData = [
  { title: "Gym", details: "I’ve been hitting the gym for 3 years now, and it’s honestly the best habit I’ve ever built. The benefits you get once you start are unmatched. It completely transforms your appearance, health, flexibility, and even sharpens your mind. There’s a ton of research backing this up. On top of that, making progress requires eating clean, staying highly disciplined, and mastering your sleep schedule.", url: "./Img/me_1.PNG", url2: "./Img/me_2.PNG", url3: "./Img/me_3.PNG" },
  { title: "Nutrition science", details: "Thanks to my main hobby, I also started paying attention to my diet. For the past 2 years, I've been deeply studying how nutrition affects different aspects of life. I don’t just follow trends; I prefer diving into scientific research, analyzing various data sources, and checking evidence-based studies. For me, it’s way more than just counting macros. Understanding how food impacts energy and focus based on real science has completely changed my productivity.", url: "./Img//Foodjpg.jpg" },
  { title: "Business Literature/Brand Biographies", details: "Reading business literature and studying biographies of successful entrepreneurs is another passion of mine. I believe that learning from the experiences of those who have already built empires is the fastest way to grow. It’s not just about stories; it’s about understanding the mindset, the strategic thinking, and the resilience required to succeed. Analyzing how great minds solve complex problems helps me approach my own goals and projects with a much broader perspective", url: "./Img/Nike.jpg" },
];

const Hobbies = () => {
  const lineRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);
  const ScrollBarRef = useRef<HTMLDivElement>(null);


  const touchStartX = useRef(0);
  const touchEndX = useRef(0);


  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 900);
  const [isVertical, setIsVertical] = useState(window.innerWidth <= 480);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [arrowLevel, setArrowLevel] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth <= 900);
      setIsVertical(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (!isVertical) return;

    const indicator = indicatorRef.current;
    if (!indicator || showSlider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;

        if (ratio >= 0.85) {
          setArrowLevel(3);
          setTimeout(() => setShowSlider(true), 700);
        } else if (ratio >= 0.55) {
          setArrowLevel(2);
        } else if (ratio >= 0.25) {
          setArrowLevel(1);
        } else {
          setArrowLevel(0);
        }
      },
      {
        threshold: [0, 0.25, 0.55, 0.85],
        rootMargin: "0px 0px -15% 0px"
      }
    );

    observer.observe(indicator);
    return () => observer.disconnect();
  }, [showSlider, isVertical]);

  
  useEffect(() => {
    if (!isVertical) return;

    if (showSlider && ScrollBarRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const ratio = entries[0].intersectionRatio;

          if (ratio <= 0.3 && !isClosing) {
            setIsClosing(true);
            setTimeout(() => {
              setArrowLevel(0);
              setShowSlider(false);
              setIsClosing(false);
            }, 600);
          }
        },
        {
          threshold: [0, 0.3],
          rootMargin: "0px 0px -15% 0px"
        }
      );

      observer.observe(ScrollBarRef.current);
      return () => observer.disconnect();
    }
  }, [showSlider, isClosing, isVertical]);

  const cardWidth = isMobileWidth ? 300 : 400;
  const totalWidth = hobbiesData.length * cardWidth;

  useEffect(() => {
    if (isVertical && !showSlider) return;

    if (lineRef.current) {
      scrollPos.current = -totalWidth;
      gsap.set(lineRef.current, { x: scrollPos.current });
      setActiveIndex(Math.abs(scrollPos.current / cardWidth) % 3);
    }
  }, [totalWidth, showSlider, isMobileWidth, isVertical]);

  
  const handleSlide = (direction: 'next' | 'prev') => {
    if (!lineRef.current || gsap.isTweening(lineRef.current)) return;

    if (direction === 'next') {
      scrollPos.current -= cardWidth;
    } else {
      scrollPos.current += cardWidth;
    }

    
    const currentAbsIndex = Math.abs(scrollPos.current / cardWidth);
    setActiveIndex(currentAbsIndex % 3);

    gsap.to(lineRef.current, {
      x: scrollPos.current,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (scrollPos.current <= -totalWidth * 2) {
          scrollPos.current = -totalWidth;
          gsap.set(lineRef.current, { x: scrollPos.current });
        }
        if (scrollPos.current >= 0) {
          scrollPos.current = -totalWidth;
          gsap.set(lineRef.current, { x: scrollPos.current });
        }
      }
    });
  };


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;


    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50; // Минимальная длина свайпа в пикселях

    if (distance > swipeThreshold) {
      handleSlide('next');
    } else if (distance < -swipeThreshold) {
      handleSlide('prev');
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0 }}>
        <Grainient color1="#12123B" color2="#212163" color3="#0F0FD9" timeSpeed={0.25} colorBalance={0} warpStrength={1} warpFrequency={5} warpSpeed={2} warpAmplitude={50} blendAngle={0} blendSoftness={0.05} rotationAmount={500} noiseScale={2} grainAmount={0.1} grainScale={2} grainAnimated={false} contrast={1.5} gamma={1} saturation={1} centerX={0} centerY={0} zoom={0.9} />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Hobbies</h1>
        <div className="Hobbies_wrapper">
          {isMobileWidth && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          <div className="Hobbie-list">
            <dl>
              <dt className="Title">
                <h2> I consider myself a versatile and disciplined person. Even if I wanted to talk about all my interests, it would take quite a while. So to save you time, I’d like to highlight the primary hobbies that define me today.</h2>
              </dt>

              {!showSlider && isVertical && (
                <div className="scroll-indicator" ref={indicatorRef}>
                  <p>Scroll me</p>
                  <div className="arrows-container">
                    <span className={`arrow ${arrowLevel >= 1 ? 'active' : ''} ${arrowLevel === 3 ? 'success' : ''}`}>↓</span>
                    <span className={`arrow ${arrowLevel >= 2 ? 'active' : ''} ${arrowLevel === 3 ? 'success' : ''}`}>↓</span>
                    <span className={`arrow ${arrowLevel >= 3 ? 'active success' : ''}`}>↓</span>
                  </div>
                </div>
              )}

              <dd>
                {(!isVertical || showSlider) && (
                  <div className={`slider-wrapper ${isVertical && isClosing ? 'hidden' : 'visible'}`} ref={ScrollBarRef}>

                    {!isMobileWidth && (
                      <div className="slider-controls">
                        <button onClick={() => handleSlide('prev')} className="slider-btn"><IoIosArrowBack /></button>
                        <button onClick={() => handleSlide('next')} className="slider-btn"><IoIosArrowForward /></button>
                      </div>
                    )}

                    {/* Контейнер для свайпов */}
                    <div
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <ul ref={lineRef} style={{ display: "flex", position: "relative", padding: 0, margin: 0, listStyle: "none" }}>
                        {[...hobbiesData, ...hobbiesData, ...hobbiesData].map((item, index) => (
                          <li key={index}>
                            <div className="details_wrapper">
                              <details style={{ zIndex: 10 }} className="Project_details">
                                <summary className="summary_wrapper">
                                  <h3>{item.title}</h3>
                                </summary>
                                <h4>{item.details}</h4>
                              </details>
                            </div>
                            <div className="img-stack">
                              <img src={item.url} alt={item.title} className="Img_wrapper" />
                              {item.title === "Gym" && (
                                <>
                                  <img src={item.url2} alt="Gym 2" className="Img_wrapper extra-img img-2" />
                                  <img src={item.url3} alt="Gym 3" className="Img_wrapper extra-img img-3" />
                                </>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                
                    {isMobileWidth && (
                      <div className="scrollbar-wrapper">
                        <div className="custom-scrollbar">
                          <div
                            className="scrollbar-thumb"
                            style={{ transform: `translateX(${activeIndex * 100}%)` }}
                          />
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </dd>
            </dl>
          </div>
          <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Hobbies;