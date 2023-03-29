import React, { useState } from 'react'
import '.././App.css'
import axios from "axios"
const baseUrl = "http://172.17.4.73:8000"
function Call() {
  const[desk,setValue] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  function CallFunction(){
    const body = {Desk: desk}
    axios.post(baseUrl,body)
      .then(res=> console.log(res))
  }
  return (
    <div>
      <h1>Call</h1>
      <div className='center-container'>
        <form className='callpage-container'>
          <label>
            Insert your desk number to call the MailBot:<br></br>
            <input type="text" name ="Desk" onChange={handleChange}/>
          </label>
          <br></br>
        </form>
      </div>
      <button value="Call" className='callbutton' onClick={CallFunction}>Call Mailbot</button>
    </div>
  )
}
//<inpiut type="submit" className='callbutton' value="Call MailBot" />

export default Call