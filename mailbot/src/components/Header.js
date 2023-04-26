import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { useState, useEffect } from 'react';

function Header({openNavbar}) {
  const [botState, setBotState] = useState("");
  const [batteryState, setBatteryState] = useState("");
  const [botLocation, setBotLocation] = useState("");
  const [packageWeight, setpackageWeight] = useState("");
  const [dest, setDest] = useState("");
  useEffect(() => {
    
    const intervalId = setInterval(() => {
        fetch("http://localhost:8000/botState")
        .then((res) => res.json())
        .then((data) => setBotState(data.botState)
        );

        fetch("http://localhost:8000/batteryState")
        .then((res) => res.json())
        .then((data) => setBatteryState(data.batteryState));

        fetch("http://localhost:8000/botLocation")
        .then((res) => res.json())
        .then((data) => setBotLocation(data.botLocation));

        fetch("http://localhost:8000/package")
        .then((res) => res.json())
        .then((data) => setpackageWeight(data.packageWeight));

        fetch("http://localhost:8000/dest")
        .then((res) => res.json())
        .then((data) => setDest(data.destination));
      }, 1000); // Refresh the page every 5 seconds


      return () => clearInterval(intervalId); // Clear interval on unmount
    
    
  }, []);

  return (
    <div className='header'>
        <div className='MenuIcon' onClick = {openNavbar}>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>

        <div className='bot-state'> STATE : {botState} </div>
        <div className='bot-location'> Location: {botLocation} </div>
        <div className='package-weight'> package: {packageWeight} g </div>
        <div className='battery-state'> Battery : {batteryState}%</div>
        <div className='dest-state'> Destination: {dest} </div>

    </div>
  )
}

export default Header