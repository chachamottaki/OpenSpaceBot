import React, { useState } from 'react'
import '.././App.css'
import axios from "axios"
const baseUrl = "http://172.17.37.139:3000"
function Call() {
  const[led,setValue] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  function CallFunction(){
    const body = {Led: led}
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
            <input type="text" name ="Led" onChange={handleChange}/>
          </label>
          <br></br>
        </form>
      </div>
      <button value="OKOK" className='callbutton' onClick={CallFunction}>Call Mailbot</button>
    </div>
  )
}
//<inpiut type="submit" className='callbutton' value="Call MailBot" />

export default Call