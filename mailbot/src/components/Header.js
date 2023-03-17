import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';

function Header({openNavbar}) {
  return (
    <div className='header'>
        <div className='MenuIcon' onClick = {openNavbar}>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>

        <div className='bot-state'> STATE : xxxxxx </div>
        <div className='battery-state'> Battery : xx%</div>

    </div>
  )
}

export default Header