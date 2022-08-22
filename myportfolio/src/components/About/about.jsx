import React from 'react'
import "./about.css";
import ME from "../../assets/RESUMEID.png";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-image">
             <img src={ME} alt=""/>
           </div>
        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3 years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>80+ projects</small>
            </article>
          </div>

          <p>
            hey i am aman ,student of national institute of technology durgapur.
          </p>
          <a href="#contact" className="btn btn-primary">Let's TAlk</a>

        </div>
      </div>
    </section>
  )
}

export default About