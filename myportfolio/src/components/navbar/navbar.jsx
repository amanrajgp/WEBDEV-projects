import React from 'react'
import "./navbar.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from "react";



const Navbar = () => {
  const [activenav,setactivenav]=useState("#");
    return (
    <nav>
      <a href="#" onClick={()=>setactivenav("#")} className={activenav ==="#"? "active" :"" }><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactivenav("#about")} className={activenav ==="#about"? "active" :"" }><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=>setactivenav("#experience")} className={activenav ==="#experience"? "active" :"" }><BiBook/></a>
      <a href="#services"  onClick={()=>setactivenav("#services")} className={activenav ==="#services"? "active" :"" }><RiServiceLine/></a>
      <a href="#contacts"  onClick={()=>setactivenav("#contacts")} className={activenav ==="#contacts"? "active" :"" }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar;