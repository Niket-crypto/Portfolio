import Grainient from "../../components/Gradient/Gradient";
import "./Projects.css";
import Buttons from "../../components/Buttons/Buttons";
import { useState,useEffect } from "react";
import Header from "../../components/Header/Header";

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [IsOpenOverview, setIsOpenOverview] = useState(false);
  const [IsOpenOverview2, setIsOpenOverview2] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 900);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Grainient
          color1="#12123B"
          color2="#212163"
          color3="#0F0FD9"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Projects</h1>
        {isMobileWidth &&<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        <div className="Projects-wrapper">
          <div className="Project_1">
            <h2>Fudzi clo</h2>
            <div className="Image_wrapper">
              <img src="./Img/Cover.png" alt="" />
              <img src="./Img/Slider.png" alt="" />
            </div>
            
            <div className={`Project_1_details ${IsOpenOverview ? 'open' : ''}`} 
              onClick={() => setIsOpenOverview(prev => !prev)} >
              <h4>Overview</h4>
              
              <div className="Summary_1">
                <div className="Summary_inner">
                  <p>A modern, responsive e-commerce landing page focused on world-class street-wear cothes. The project showcases a clean UI/UX design with a focus on product presentation and smooth user interaction. </p>
                  <dl>
                    <dt>Key-Features:</dt>
                    <dd>
                      <ul>
                        <li>Dynamic Product Showcase: Implemented a custom-built image slider using Vanilla JavaScript to cycle through featured products.</li>
                        <li>Responsive Layout: Fully adaptive design ensures a seamless shopping experience across desktops, tablets, and mobile devices.</li>
                        <li>Interactive UI Elements: Hover effects, smooth transitions, and dynamic pricing displays to enhance user engagement</li>
                        <li>Clean Architecture: Built with semantic HTML5 and modular CSS for better maintainability and SEO.</li>
                      </ul>
                    </dd>
                    <dt>Technologies Used:</dt>
                    <dd>HTML, JavaScript, CSS, Figma</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="Project_2">
            <h2>Lanka</h2>
            <div className="Image_wrapper">
              <img src="./Img/Lanka_1.png" alt="" />
              <img src="./Img/Lanka_2.png" alt="" />
            </div>
            <div className={`Project_2_details ${IsOpenOverview2 ? 'open' : ''}`} 
              onClick={() => setIsOpenOverview2(prev => !prev)} >
              <h4>Overview</h4>
              <div className="Summary_2">
                <div className="Summary_inner">
                  <p>A comprehensive business automation ecosystem designed to streamline enterprise operations through a high-performance, intuitive interface. The platform centralizes team management, resource tracking, and client relations into a single "command center," significantly reducing operational overhead. </p>
                  <dl>
                    <dt>Key-Features:</dt>
                    <dd>
                      <ul>
                        <li>Advanced Task Orchestration Features a dynamic task board with real-time progress analytics. The system automatically calculates completion percentages and monitors team capacity, allowing for data-driven project management.</li>
                        <li>Integrated CRM & Client Database Seamless integration with client databases for centralized information management, enabling faster communication and improved customer relationship tracking.</li>
                        <li>Multi-Channel Notification System Automated email alerts and instant in-app notifications ensure the team stays synchronized on critical updates and upcoming deadlines.</li>
                        <li>Infrastructure Resilience Tracking (Context-Aware) A unique status-management system allowing employees to report localized infrastructure challenges (e.g., power outages or personal leave) in one click, ensuring transparent team coordination during unpredictable conditions.</li>
                      </ul>
                    </dd>
                    <dt>Technologies Used:</dt>
                    <dd>Frontend: React, TypeScript, TanStack (Query/Router). Backend Integration: Database-driven architecture with secure API endpoints. Styling: Modular CSS, Flexbox/Grid for high-fidelity UI reproduction from Figma.</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Projects;