// src/pages/contacts.js
import Navbar from "../components/Navbar";  // Keep your existing nav
import { FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa";  //FaTwitter, FaFacebook

import "./contact.css"; // Import the new CSS

export default function Contacts() {
  return (
    <>
      {/* 1) Keep your Navbar */}
      <Navbar />

      {/* 2) Hero section with a horizontal photo + "Contact Me" text */}
      <section className="contact-hero">
        <h1 className="contact-heading">Contact Me</h1>
        <img
          src="/oldwell-horiz.jpg" 
          alt="Contact img"
          className="contact-hero-image"
        />
      </section>

      {/* 3) Side-by-side main contact layout */}
      <div className="contacts-container">
        {/* LEFT SIDE: Minimal text & divider style */}
        <div className="contacts-left">
          <div className="contact-block">
            <h3>GENERAL ENQUIRIES</h3>
            <p>Email: danielalbwangphotography@gmail.com</p>
            <p>IG: danielwangphotography</p>
          </div>
          <hr className="divider" />
          <div className="contact-block">
            <h3>FURTHER GALLERIES / PHOTO LINKS</h3>
            <p>My Pixieset Gallery Collection</p>
            <a href="https://danielwangphotography.pixieset.com" target="_blank" id="pixieset">danielwangphotography.pixieset.com</a>
            
          </div>
        </div>

        {/* RIGHT SIDE: contact form with sage green border */}
        <div className="contacts-right">
          <h2>Questions? Comments?</h2>
          <p>
            Let me know what you're looking for and 
            I'll get back to you shortly  
            {/* <br /> */}
            ...or just leave a message and say hi.
          </p>
          <form className="contact-form">
            <div className="form-row">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-row full-width">
              <label>Message</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>

      {/* Bottom area for social icons, etc. */}
      <div className="contact-bottom">
        <div className="social-icons">
          <a 
            href="https://www.instagram.com/danielwangphotography/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
          <FaInstagram/>
          </a>

          <a 
            href="https://www.youtube.com/@DanielWang6"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
          <FaYoutube/>
          </a>

          <a 
            href="https://www.linkedin.com/in/daniel-wang23/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
          <FaLinkedin/>
          </a>
          
        </div>
        <p className="copyright">
          Daniel Wang Photography Copyright © All Rights Reserved.
        </p>
      </div>

    </>
  );
}
