import React from 'react'
import './NavBar.css';
import HomeLineIcon from 'remixicon-react/HomeLineIcon';
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon';
import SendPlaneFillIcon from 'remixicon-react/SendPlaneFillIcon';
import QuestionnaireFillIcon from 'remixicon-react/QuestionnaireFillIcon';

function NavBar({navbar}) {
  return (
    <div className= {navbar?"navbar navbar--open":"navbar"}>
        <li><HomeLineIcon className='icon' /> Home</li>
        <li><PhoneLineIcon className='icon' /> Call</li>
        <li><SendPlaneFillIcon className='icon' /> Send</li>
        <li><QuestionnaireFillIcon className='icon' /> About</li>
    </div>
  )
}

export default NavBar