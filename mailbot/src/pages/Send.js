import React from 'react'
import '.././App.css'
import axios from "axios"
const baseUrl = "http://172.17.4.33:8000"

function Send() {
  const[desk,setValue] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  function SendFunction(){
    const body = {Desk: desk}
    axios.post(baseUrl,body)
      .then(res=> console.log(res))
  }
  return (
    <div>
      <h1>Send</h1>
      <div className='center-container'>
        <form className='callpage-container'>
          <label>
          Insert your colleague's desk number to send the MailBot:<br></br>
            <input type="text" name ="Desk" onChange={handleChange}/>
          </label>
          <br></br>
        </form>
      </div>
      <button value="Send" className='sendbutton' onClick={SendFunction}>Send Mailbot</button>
    </div>
  )

}

export default Send


