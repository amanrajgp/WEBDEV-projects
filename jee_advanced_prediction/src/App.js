import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import {Route,Link,Routes} from "react-router-dom";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
        

    </div>
  );
}

export default App;
