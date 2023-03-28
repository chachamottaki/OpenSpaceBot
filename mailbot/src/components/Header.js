import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { useState, useEffect } from 'react';

function Header({openNavbar}) {
  const [botState, setBotState] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/botState")
    .then((res) => res.json())
    .then((data) => setBotState(data.botState));
  }, []);

  return (
    <div className='header'>
        <div className='MenuIcon' onClick = {openNavbar}>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>

        <div className='bot-state'> STATE : {botState} </div>
        <div className='battery-state'> Battery : xx%</div>

    </div>
  )
}

export default Header