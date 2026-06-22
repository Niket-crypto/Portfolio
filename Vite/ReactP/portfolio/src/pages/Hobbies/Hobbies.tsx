import Grainient from "../../components/Gradient/Gradient";
import "./Hobbies.css";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects";

const hobbiesData = [
  { title: "Gym", details: "I’ve been hitting the gym for 3 years now, and it’s honestly the best habit I’ve ever built. The benefits you get once you start are unmatched. It completely transforms your appearance, health, flexibility, and even sharpens your mind. There’s a ton of research backing this up. On top of that, making progress requires eating clean, staying highly disciplined, and mastering your sleep schedule.", url: "./Img/me_1.PNG", url2: "./Img/me_2.PNG", url3: "./Img/me_3.PNG" },
  { title: "Nutrition science", details: "Reading business literature and studying biographies of successful entrepreneurs is another passion of mine. I believe that learning from the experiences of those who have already built empires is the fastest way to grow. It’s not just about stories; it’s about understanding the mindset, the strategic thinking, and the resilience required to succeed. Analyzing how great minds solve complex problems helps me approach my own goals and projects with a much broader perspective", url: "./Img//Foodjpg.jpg" },
  { title: "Business Literature/Brand Biographies", details: "Thanks to my main hobby, I also started paying attention to my diet. For the past 2 years, I've been deeply studying how nutrition affects different aspects of life. I don’t just follow trends; I prefer diving into scientific research, analyzing various data sources, and checking evidence-based studies. For me, it’s way more than just counting macros. Understanding how food impacts energy and focus based on real science has completely changed my productivity.", url: "./Img/Nike.jpg" },
];

const Hobbies = () => {
  const lineRef = useRef<HTMLUListElement>(null);
  const scrollPos = useRef(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardWidth = isMobile ? 300 : 400;
  const totalWidth = hobbiesData.length * cardWidth;

  useEffect(() => {
    if (lineRef.current) {
      scrollPos.current = -totalWidth;
      gsap.set(lineRef.current, { x: scrollPos.current });
    }
  }, [totalWidth]);

  const handleSlide = (direction: 'next' | 'prev') => {
    if (!lineRef.current || gsap.isTweening(lineRef.current)) return;

    if (direction === 'next') {
      scrollPos.current -= cardWidth;
    } else {
      scrollPos.current += cardWidth;
    }

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

  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }}>
        <Grainient color1="#12123B" color2="#212163" color3="#0F0FD9" timeSpeed={0.25} colorBalance={0} warpStrength={1} warpFrequency={5} warpSpeed={2} warpAmplitude={50} blendAngle={0} blendSoftness={0.05} rotationAmount={500} noiseScale={2} grainAmount={0.1} grainScale={2} grainAnimated={false} contrast={1.5} gamma={1} saturation={1} centerX={0} centerY={0} zoom={0.9} />
      </div>

      <h1>Hobbies</h1>
      <div className="Hobbies_wrapper">
        <div className="elements">
          <img src="./Img/photo_2026-04-28_14-00-51.jpg" alt="" />
          <h3>Serhienko Nikita Vadimovich </h3>
          <button className={`burger-menu-btn ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="Hobbie-list">
          <dl>
            <dt className="Title">
              <h2> I consider myself a versatile and disciplined person. Even if I wanted to talk about all my interests, it would take quite a while. So to save you time, I’d like to highlight the primary hobbies that define me today.</h2>
            </dt>
            <dd>
              <div className="slider-wrapper">
                <div className="slider-controls" >
                  <button onClick={() => handleSlide('prev')} className="slider-btn"><IoIosArrowBack /></button>
                  <button onClick={() => handleSlide('next')} className="slider-btn"><IoIosArrowForward /></button>
                </div>

                <ul ref={lineRef} style={{ display: "flex", padding: 0, margin: 0, listStyle: "none" }}>
                  {[...hobbiesData, ...hobbiesData, ...hobbiesData].map((item, index) => (
                    <li key={index}>
                      <div className="details_wrapper">
                        <details>
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
                <nav className={`Buttons ${menuOpen ? "open" : ""}`}>

                  <button><Link to="/hero" onClick={() => setMenuOpen(false)}>Home</Link></button>
                  <button><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></button>


                </nav>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
