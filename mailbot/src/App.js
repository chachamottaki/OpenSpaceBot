import './App.css';
// routing
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Call from "./pages/Call"
import About from "./pages/About"
import Send from "./pages/Send"

import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App(){

  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 3000); // Refresh the page every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const[navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((prevState) => !prevState)
  }
  
  return (
    <div className="App">
      <div>
        <Header openNavbar = {toggleNavbar}/>
        <NavBar navbar = {navbar} />
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="call" element={ <Call/> } />
        <Route path="about" element={ <About/> } />
        <Route path="send" element={ <Send/> } />
      </Routes>
    </div>
  );
}

export default App;
