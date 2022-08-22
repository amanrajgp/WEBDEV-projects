import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h1>Services</h1>

      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
          </ul>

        </article>
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
          </ul>

        </article>
        <article className="services">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>services offered by me</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services