import { useState } from 'react'
import './Writing.css'

function Writing() {
  const [activeSection, setActiveSection] = useState('articles')

  const articles = [
    {
      id: 1,
      title: "Understanding the Language of Quantum Computing",
      excerpt: "Exploring the fundamental concepts and terminology that form the foundation of quantum computing, making complex quantum mechanics accessible to everyone.",
      date: "Medium",
      tags: ["Quantum Computing", "Physics", "Technology"],
      link: "https://medium.com/@gtfxdsp/understanding-the-language-of-quantum-computing-7b25a5110086"
    },
    {
      id: 2,
      title: "Quantum Computing Demystified: Weird Physics and Real Power",
      excerpt: "Demystifying the strange world of quantum physics and its practical applications in computing, breaking down complex concepts into understandable insights.",
      date: "Medium",
      tags: ["Quantum Computing", "Physics", "Innovation"],
      link: "https://medium.com/@gtfxdsp/quantum-computing-demystified-weird-physics-and-real-power-ca1056ed8cff"
    },
    {
      id: 3,
      title: "Social Media as the New Search Engine",
      excerpt: "Analyzing how social media platforms are evolving into primary search destinations, changing the way we discover and consume information online.",
      date: "WordPress",
      tags: ["Social Media", "Search", "Digital Trends"],
      link: "https://aarchee.wordpress.com/2025/12/26/social-media-as-the-new-search-engine/"
    }
  ]

  const researchPapers = [
    {
      id: 1,
      title: "X-FED: An Explainable Federated Hybrid IDS for Smart SOC",
      authors: "Aarchie Kalsariya",
      journal: "ICDSINC 2025",
      year: "2025",
      abstract: "This research presents X-FED, an innovative explainable federated hybrid intrusion detection system designed for Smart Security Operations Centers. The system combines federated learning with explainable AI to enhance cybersecurity while maintaining privacy and providing transparent decision-making processes.",
      tags: ["Federated Learning", "Cybersecurity", "Explainable AI", "Intrusion Detection"],
      status: "Accepted for Presentation",
      link: "https://drive.google.com/file/d/11sToQjqDwnHJqCQKwuGCyXWjXc7_VT8k/view?usp=sharing"
    }
  ]

  const handleArticleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handlePaperClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="writing">
      <div className="writing-header">
        <p className="handwritten-intro">
          my writings & research...
        </p>
      </div>
      
      <div className="section-tabs">
        <button 
          className={`tab-button ${activeSection === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveSection('articles')}
        >
          Articles
        </button>
        <button 
          className={`tab-button ${activeSection === 'research' ? 'active' : ''}`}
          onClick={() => setActiveSection('research')}
        >
          Research Papers
        </button>
      </div>

      {activeSection === 'articles' && (
        <div className="articles-section">
          <p className="section-subtitle">
            Published articles from Medium and WordPress.
          </p>
          <div className="posts-grid">
            {articles.map((post) => (
              <div key={post.id} className="post-frame" onClick={() => handleArticleClick(post.link)}>
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="post-footer">
                    <span className="post-date">{post.date}</span>
                    <button className="read-more-btn">Read Article</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'research' && (
        <div className="research-section">
          <p className="section-subtitle">
            Academic research and publications.
          </p>
          <div className="papers-grid">
            {researchPapers.map((paper) => (
              <div key={paper.id} className="paper-frame" onClick={() => handlePaperClick(paper.link)}>
                <div className="paper-content">
                  <div className="paper-header">
                    <h3 className="paper-title">{paper.title}</h3>
                    <span className={`status-badge accepted`}>
                      {paper.status}
                    </span>
                  </div>
                  <p className="paper-authors">{paper.authors}</p>
                  <p className="paper-journal">{paper.journal} ({paper.year})</p>
                  <p className="paper-abstract">{paper.abstract}</p>
                  <div className="paper-tags">
                    {paper.tags.map((tag, index) => (
                      <span key={index} className="research-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="paper-footer">
                    <button className="view-paper-btn">View Paper</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Writing