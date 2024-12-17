import React from 'react';
import './Contact.css'; // Import the CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          
          <div className="info-item">
            <h3>Address</h3>
            <p>1234 Cargo Road, Suite 500, City, State</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>contact@website.com</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your message..." rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
