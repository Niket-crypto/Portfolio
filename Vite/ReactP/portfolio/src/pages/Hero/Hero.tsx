import  Buttons  from "../../components/Buttons/Buttons";
import Grainient from "../../components/Gradient/Gradient";
import TextType from "../../components/TextType/TypeText";
import Header from "../../components/Header/Header";
import { useState } from "react";
import "./Hero.css";


const Hero = () => {
  const text =
    "Hi! :) I am an experienced Frontend Developer who loves building dynamic, scalable, and pixel-perfect web applications. While my core expertise lies in the React ecosystem (TypeScript, GSAP, Tailwind), I also successfully build robust backend solutions by leveraging modern AI tools to accelerate development and solve complex logic. I am not afraid of challenges, learn quickly, and take a highly responsible approach to my work. I would be absolutely happy to discuss how I can bring value to your team!";
const [menuOpen, setMenuOpen] = useState(false);
const [contactsOpen, setIsOpen] = useState(false);
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
      <div style={{ position: "relative" }}>
        <h1>Portfolio</h1>

        <div className="Header">
       
       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          

          <div className="Info-wrapper">
            <div className="header-title">
              Junior Software Engineer
              <div>
              <TextType
                text={text}
                typingSpeed={40}
                pauseDuration={Infinity}
                loop={false}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
              />
              </div>
            </div>
<Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         
          </div>
        </div>
      </div>
       <footer className="Footer">
        <div className={`Contact-bar ${contactsOpen ? "open" : ""}`}>
    <a href="mailto:0.nikitasergienko.0@gmail.com">Email: 0.nikitasergienko.0@gmail.com</a>
    <a href="https://t.me/hanma_nekit">Telegram: @hanma_nekit</a>
  </div>
  <button onClick={() => setIsOpen(!contactsOpen)} className={`contact-title ${contactsOpen ? "open" : ""}`}>Contact me</button>
</footer>
    </>
  );
};

export default Hero;
 