import React from 'react'
import './NavBar.css';
import { Link } from "react-router-dom";
import HomeLineIcon from 'remixicon-react/HomeLineIcon';
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon';
import SendPlaneFillIcon from 'remixicon-react/SendPlaneFillIcon';
import QuestionnaireFillIcon from 'remixicon-react/QuestionnaireFillIcon';

function NavBar({navbar}) {
  return (
    <div className= {navbar?"navbar navbar--open":"navbar"}>
        <Link to="/" className="link"><li><HomeLineIcon className='icon' /> Home</li></Link>
        <Link to="call" className="link"><li><PhoneLineIcon className='icon' /> Call</li></Link>
        <Link to="about" className="link"><li><SendPlaneFillIcon className='icon' /> Send</li></Link>
        <Link to="send" className="link"><li><QuestionnaireFillIcon className='icon' /> About</li></Link>
    </div>
  )
}

export default NavBar