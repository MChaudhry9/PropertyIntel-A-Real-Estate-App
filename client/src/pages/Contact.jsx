import React from "react";
import './Contact.css'

const Contact = () => {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfGkJ_2H0Zfc88e6R5_krMaySGMFQGuMiguSlQZSZOEs0Owow/viewform?usp=sharing'

  return (
    <div className="full-screen-container">
      <div className="inside-container" style={{alignItems: 'center'}}>
        <h2 style={{fontSize: '30px', textAlign: 'center'}}>Contact Us</h2>
        <div className="contact-container" style={{alignItems: 'center'}}>
          <h2 className="header-text" style={{marginTop: '30px'}}>Team Members</h2>
          <h3 className="inner-text" style={{marginTop: '5px'}}>Jay Trivedi</h3>
          <h3 className="inner-text">Mamuna Chaudhry</h3>
          <h3 className="inner-text">Chao Hong</h3>

          <h2 className="header-text" style={{marginTop: '30px'}}>Team Contact</h2>
          <h3 className="inner-text">ccnyrealestate@gmail.com</h3>          
        </div>
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          <button className="feedback-btn">
            Feedback Form
          </button>
        </a>
      </div>
    </div>
  )
}

export default Contact;
