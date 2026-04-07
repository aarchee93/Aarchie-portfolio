import './Portfolio.css'

function Portfolio() {
  // Real projects data with links
  const projects = [
    { 
      id: 1, 
      title: "Habiticsia", 
      description: "Extensive app inspired by multiple note-taking apps to embed them into one comprehensive application. A complete productivity solution combining various note-taking methodologies.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Lovable AI"],
      status: "Completed",
      link: "https://habiticsia.vercel.app/",
      isClient: false
    },
    { 
      id: 2, 
      title: "QSketch", 
      description: "App made for gamifying quantum computing with real-time documentation. Uses pure mathematical logic for quantum computations and interactive learning.",
      technologies: ["React", "Tailwind CSS", "Pure Math Logic", "Quantum Computing"],
      status: "In Progress",
      link: "https://qsketch.netlify.app/",
      isClient: false
    },
    { 
      id: 4, 
      title: "Predicting Statistical Properties of Chaotic Systems", 
      description: "Research project focused on predicting statistical properties of chaotic systems beyond the deterministic horizon, exploring machine learning approaches to model long-term behavior where traditional methods break down.",
      technologies: ["Python", "Machine Learning", "Chaos Theory", "Data Science"],
      status: "Completed",
      link: "https://github.com/aarchee93/Predicting-Statistical-Properties-of-Chaotic-Systems-Beyond-the-Deterministic-Horizon",
      isClient: false
    },
    { 
      id: 3, 
      title: "Portfolio Website", 
      description: "Modern, responsive portfolio website showcasing projects and experience with interactive elements, tilted page effects, and handwritten aesthetic design.",
      technologies: ["React", "CSS3", "Vite", "Responsive Design"],
      status: "Completed",
      link: window.location.origin,
      isClient: false
    }
  ]

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1 className="handwritten-title">my projects</h1>
      </header>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.isClient && <div className="client-badge">CLIENT PROJECT</div>}
            
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <button 
                className="project-link"
                onClick={() => handleProjectClick(project.link)}
              >
                {project.link.includes('github.com') ? 'View on GitHub' : 'View Live Project'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio