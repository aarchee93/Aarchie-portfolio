import './About.css'
import myPhoto from '../assets/my photo.jpg'
import paperclipImg from '../assets/paperclip.png'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="developer-photo">
          <img src={paperclipImg} alt="Paper clip" className="photo-paper-clip" />
          <img src={myPhoto} alt="Developer" className="photo-image" />
        </div>
        
        <div className="developer-info">
          <h1 className="handwritten-title">meet aarchie</h1>
          
          <div className="bio-text">
            <p>
              Hi, I'm Aarchie, an engineer by profession and a creative at heart. 
              I'm passionate about exploring emerging technologies and turning curiosity 
              into practical implementations.
            </p>
            <p>
              My days are spent engineering solutions and experimenting with code, 
              while my evenings are dedicated to creative writing and design. 
              I believe the best work happens at the intersection of logic and creativity, 
              and I love bringing both to everything I build.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">Tech Stack:</h3>
              <div className="skills-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Qiskit</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>

            <button 
              className="cv-download-button"
              onClick={() => window.open('https://aarchiewrites.notion.site/Aarchee-Kalsariya-2974b7df295380f2a139d22a164e2622', '_blank', 'noopener,noreferrer')}
            >
              See My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About