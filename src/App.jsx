import { useState } from 'react'
import profileImg from './assets/profile.png';
import './App.css'
 import WebThreads from './components/WebThreads';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function App() {
  const [count, setCount] = useState(0)

  return (
   <section className="hero">

  <div className="hero-background">
    <WebThreads
      colors={["#5227FF", "#FF9FFC"]}
      coreColor="#FFFFFF"
      threadCount={6}
      spread={0.18}
      lightMode={false}
      speed={0.2}
      frequency={5}
      taper={1}
      position={0.5}
      pinch={0.5}
      nodes={1}
      angle={0}
      glow={0.02}
      falloff={0.6}
      thickness={1.1}
      brightness={0.6}
      opacity={1}
      depth={0}
      pulses={0}
      mirror
      shimmer={false}
      fade={0}
      grain={0.035}
      intro
      mouseInteraction
      mouseStrength={0.5}
      pulseOnClick
      paused={false}
    />
  </div>

  <div className="navbar">
    <a href='#home' className="logo">Mobashshera Rahman</a>
   <div className= "navbar-title">
    Software Developer
   </div>
 <div className="social-links">

  <a
    href="https://github.com/MobashsheraRahman"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/mobashshera-rahman-ab7b43229"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

</div>
<input type="checkbox" id="menu" />

  <label htmlFor="menu" className="menu-icon">
    ☰
  </label>


  <div className="sidebar">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <button className= "contact">Contact</button>
  </div>

    
    </div>
 
  <div className="profile-image">
  <img src={profileImg} alt="My profile" />
</div>
<div className="hero-content">

  <h1>
    Building What's <span>Next.</span>
  </h1>

  <h2>
    Always learning, always building.
  </h2>

  <p>
    Passionate about software development, AI, and exploring
    emerging technologies to build intelligent, meaningful solutions.
  </p>

</div>
</section>
  )
}

export default App
