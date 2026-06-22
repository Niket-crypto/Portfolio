import { Link } from "react-router-dom";
import Grainient from "../../components/Gradient/Gradient";
import TextType from "../../components/TextType/TypeText";
import "./Hero.css";
import { useState } from "react";
import Projects from "../Projects/Projects";

const Hero = () => {
  const text =
    "Hi! I am looking for my first position as a Junior Frontend Developer. My goal is to gain practical experience in commercial development, grow as a specialist, and bring value to the team and business. I am not afraid of challenges, learn quickly, and take a responsible approach to my work. I would be happy to discuss potential collaboration opportunities.";
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div 
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
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
      <div className="Background">
        <h1>Portfolio</h1>

        <div className="Header">
          <div className="elements">
            <img src="./Img/photo_2026-04-28_14-00-51.jpg" alt="" />
            <h3>Serhienko Nikita Vadimovich </h3>
            <button className={`burger-menu-btn ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div> 
          

          <div className="Info-wrapper">
            <div className="header-title">
              Junior Software Engineer
              <p>
              <TextType
                text={text}
                typingSpeed={40}
                pauseDuration={Infinity}
                loop={false}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
              />
              </p>
            </div>

            <div className= {`Buttons ${menuOpen ? "open" : ""}`}>
              <div className = "button_1_wrapper">
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                <button className = "Button_1">Projects</button>
              </Link>
              </div>
              <div className = "button_2_wrapper">
              <Link to="/hobbies" onClick={() => setMenuOpen(false)}>
                <button className = "Button_2">Hobbies</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
