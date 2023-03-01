import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>Home
      <h1>welcome y'all!! </h1>
      <Link to="call">Click to call the bot</Link><br></br>
      <Link to="about">Click to view our about page</Link><br></br>
      <Link to="send">send page</Link>
    </div>
    
  )
}

export default Home