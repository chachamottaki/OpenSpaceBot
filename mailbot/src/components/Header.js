import React from 'react'
import './Header.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';

function Header() {
  return (
    <div className='header'>
        <div className='MenuIcon'>
          <MenuLineIcon color="#fff" />
        </div>
        <div className='title'> Mailing Robot </div>
    </div>
  )
}

export default Header