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
  const [botLocation, setBotLocation] = useState("");
  const [packageWeight, setpackageWeight] = useState("");
  const [dest, setDest] = useState("");
  const [botState, setBotState] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
        fetch("http://localhost:8000/botState")
        .then((res) => res.json())
        .then((data) => setBotState(data.botState));

        fetch("http://localhost:8000/botLocation")
        .then((res) => res.json())
        .then((data) => setBotLocation(data.botLocation));

        fetch("http://localhost:8000/package")
        .then((res) => res.json())
        .then((data) => setpackageWeight(data.packageWeight));

        fetch("http://localhost:8000/dest")
        .then((res) => res.json())
        .then((data) => setDest(data.destination));
      }, 1000); // Refresh the page every second
      return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const closeModal2 = () => {
    setModal2IsOpen(false);
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
      setModal2IsOpen(true);
    }
  }
  return (
    <div>
      <h1>Send</h1>
      <div className='center-container'>
        <form className='callpage-container'>
          <div className='states'>
              <div className='bot-state'> <b>State of the robot : {botState} </b></div>
              <div className='bot-location'> <b>Location of the robot: {botLocation}</b> </div>
              <div className='package-weight'> <b>Weight of the package: {packageWeight} g </b></div>
              <div className='dest-state'> <b> Destination: {dest} </b></div>
          </div>
          <br></br>
          <label>
          Insert your colleague's desk number to send the MailBot:<br></br>
            <input type="number" name ="Desk" onChange={handleChange} required/>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
            <h2>Hello!</h2>
            <p>Unfortunately, our mailbot is busy at the moment, please try again later.</p>
            <button onClick={closeModal}>Close</button>
            </Modal>
            <Modal isOpen={modal2IsOpen} onRequestClose={closeModal2} style={modalStyles}>
            <h2>Hello!</h2>
            <p>Request sent. The robot will be sent to the specified desk.</p>
            </Modal>
          </label>
          
        </form>
      </div>
      <button value="Send" className='sendbutton' onClick={SendFunction}>Send Mailbot</button>
    </div>
  )

}

export default Send


