import {React, useState, useEffect} from 'react'
import '.././App.css'
import axios from "axios"
import Modal from 'react-modal';

const baseUrl = "http://127.0.0.1:8000"

function Send() {
  const modalStyles = {
    content: {
      width: '40%',
      height: '20%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  function SendFunction(){
    if(botState === "busy"){
      //display error message
      setModalIsOpen(true);
    }
    else{
      setModalIsOpen(false);
      const body = {Desk: desk}
      axios.post(baseUrl,body)
      .then(res=> console.log(res))
    }
  }
  return (
    <div>
      <h1>Send</h1>
      <div className='center-container'>
        <form className='callpage-container'>
          <label>
          Insert your colleague's desk number to send the MailBot:<br></br>
            <input type="text" name ="Desk" onChange={handleChange}/>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
            <h2>Hello!</h2>
            <p>Unfortunately, our mailbot is busy at the moment, please try again later.</p>
            <button onClick={closeModal}>Close</button>
            </Modal>
          </label>
          <br></br>
        </form>
      </div>
      <button value="Send" className='sendbutton' onClick={SendFunction}>Send Mailbot</button>
    </div>
  )

}

export default Send


