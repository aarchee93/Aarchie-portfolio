import { useState } from 'react'
import './Contact.css'
import paperclipImg from '../assets/paperclip.png'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hi Aarchie! 

Name: ${formData.name}
Email: ${formData.email}

Message: ${formData.message}`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917779044491?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="handwritten-title">Thank You</h1>
        
        <div className="contact-form-frame">
          <img src={paperclipImg} alt="Paper clip" className="paper-clip" />
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="handwritten-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="handwritten-label">@ email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="handwritten-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send via WhatsApp
            </button>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:aarchiekalsariya2@gmail.com" className="contact-link">
                  aarchiekalsariya2@gmail.com
                </a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="https://wa.me/917779044491" target="_blank" rel="noopener noreferrer" className="contact-link">
                  +91 77790 44491
                </a>
              </div>
              
              <div className="contact-socials">
                <a href="https://github.com/aarchee93" target="_blank" rel="noopener noreferrer" className="social-icon">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/aarchee-kalsariya" target="_blank" rel="noopener noreferrer" className="social-icon">
                  LinkedIn
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact