import React from "react";
import './Contact.css'

const Contact = () => {
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
        {/* <form className="loginForm" style={{marginTop: '10px'}}> */}
          <button style={{marginTop: '40px'}} className="feedback-btn">Feedback Form</button>
        {/* </form> */}
      </div>
    </div>
  )
}

export default Contact;
