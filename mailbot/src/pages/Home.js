import React from 'react'
import { Link } from "react-router-dom";
import '.././App.css';

function Home() {
  return (
    <div>
      <h1>Home </h1>
      <div className='center-container'>

        <div className = "homepage-container-1">
          <div className = "homepage-item homepage-item-1">
            <Link to="/call" className='link'>
              call
            </Link>
          </div>
          <div className = "homepage-item homepage-item-2">
            <Link to="/send" className='link'>
              send
            </Link>
          </div>
          <div className = "homepage-item homepage-item-3">
            <Link to="/about" className='link'>
              about
            </Link>
          </div>

        </div>
      </div>

    </div>
    
    
  )
}

export default Home