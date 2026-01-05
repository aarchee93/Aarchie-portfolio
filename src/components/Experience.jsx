import './Experience.css'
import paperclipImg from '../assets/paperclip.png'
import { useState, useEffect } from 'react'

function Experience() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  const experiences = [
    {
      id: 1,
      company: "AI Core Systems",
      position: "Technical Support Intern",
      duration: "2025",
      description: "Author technical blogs demystifying AI technologies and deliver technical support by diagnosing issues and implementing solutions."
    },
    {
      id: 2,
      company: "Silver Oak University IEEE Student Branch",
      position: "Creative & Content Contributor",
      duration: "2025",
      description: "Spearheaded branding and social media strategy, designed visual assets, and developed creative campaigns for member engagement."
    },
    {
      id: 3,
      company: "IEEE Signal Processing Society Gujarat Chapter",
      position: "Research Intern",
      duration: "2025",
      description: "Prepared comprehensive project reports and collaborated in regular review discussions, strengthening research and documentation skills."
    },
    {
      id: 4,
      company: "Silver Oak University IEEE SIGHT Student Branch Group",
      position: "Secretary",
      duration: "2025",
      description: "Gained experience in event management and developed leadership skills by coordinating with teams and maintaining IEEE standards."
    }
  ]

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Reset to first page when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(0)
  }, [isMobile])

  // Split experiences into pages for mobile (1 per page)
  const experiencesPerPage = isMobile ? 1 : experiences.length
  const totalPages = Math.ceil(experiences.length / experiencesPerPage)
  const currentExperiences = experiences.slice(
    currentPage * experiencesPerPage,
    (currentPage + 1) * experiencesPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="experience">
      <header className="experience-header">
        <h1 className="handwritten-title">my experience</h1>
      </header>
      
      <div className="experience-container">
        <div className="experience-page">
          <img src={paperclipImg} alt="Paper clip" className="paper-clip" />
          <div className="page-header">
            <h2>Professional Experience</h2>
            <div className="page-lines"></div>
          </div>
          
          <div className="experience-list">
            {currentExperiences.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-content">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                  </div>
                  <div className="role-info">
                    <h4 className="position">{exp.position}</h4>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <p className="description">{exp.description}</p>
                </div>
                {index < currentExperiences.length - 1 && <div className="experience-divider"></div>}
              </div>
            ))}
          </div>
          
          <div className="page-footer">
            <div className="page-number">Page {currentPage + 1} of {totalPages}</div>
            {totalPages > 1 && (
              <div className="page-navigation">
                <button onClick={prevPage} className="nav-button">←</button>
                <button onClick={nextPage} className="nav-button">→</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience