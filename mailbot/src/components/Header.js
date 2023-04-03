import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { useState, useEffect } from 'react';

function Header({openNavbar}) {
  const [botState, setBotState] = useState("");
  const [batteryState, setBatteryState] = useState("");
  const [botLocation, setBotLocation] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/botState")
    .then((res) => res.json())
    .then((data) => setBotState(data.botState));

    fetch("http://localhost:8000/batteryState")
    .then((res) => res.json())
    .then((data) => setBatteryState(data.batteryState));

    fetch("http://localhost:8000/botLocation")
    .then((res) => res.json())
    .then((data) => setBotLocation(data.botLocation));
  }, []);

  return (
    <div className='header'>
        <div className='MenuIcon' onClick = {openNavbar}>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>

        <div className='bot-state'> STATE : {botState} </div>
        <div className='bot-location'> Location: {botLocation} </div>
        <div className='battery-state'> Battery : {batteryState}%</div>

    </div>
  )
}

export default Header