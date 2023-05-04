import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { useState, useEffect } from 'react';

function Header({openNavbar}) {
  const [botState, setBotState] = useState("");
  const [batteryState, setBatteryState] = useState("");

  useEffect(() => {
    
    const intervalId = setInterval(() => {
        fetch("http://localhost:8000/botState")
        .then((res) => res.json())
        .then((data) => setBotState(data.botState)
        );

        fetch("http://localhost:8000/batteryState")
        .then((res) => res.json())
        .then((data) => setBatteryState(data.batteryState));

      }, 1000); // Refresh the page every second


      return () => clearInterval(intervalId); // Clear interval on unmount
    
    
  }, []);

  return (
    <div className='header'>
        <div className='MenuIcon' onClick = {openNavbar}>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>
        <div className='bot-state'> STATE : {botState} </div>
        <div className='battery-state'> Battery : {batteryState}%</div>
    </div>
  )
}

export default Header