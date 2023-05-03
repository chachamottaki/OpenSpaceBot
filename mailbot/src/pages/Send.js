import {React, useState, useEffect} from 'react'
import '.././App.css'
import axios from "axios"
const baseUrl = "http://127.0.0.1:8000"

function Send() {
  const[desk,setValue] = useState(0)
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const [botState, setBotState] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
        fetch("http://localhost:8000/botState")
        .then((res) => res.json())
        .then((data) => setBotState(data.botState)
        );
      }, 1000); // Refresh the page every second
      return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  function SendFunction(){
    if(botState == "busy"){
      //display error message
      const newWindow = window.open('', 'newWindow', 'width=300,height=200');
      newWindow.document.write('<h2>Hello!</h2> <p>Unfortunately, mailbot is busy at the moment, please try again later </p>');
    }
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


