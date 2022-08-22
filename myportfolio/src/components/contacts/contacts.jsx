import React from 'react';
import "./contacts.css";
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com";


const Contacts = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lv3oyqe', 'template_k9601pn', form.current, '3TR-mqkMN5WriHLQl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>#Amanrajgp</h5>
            <a href="https://m.me/profile.php?id=100026322142875" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91-6203572443</h5>
            <a href="https://api.whatsapp.com/send?phone+916203572443" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts