import React from 'react'
import '.././App.css';

function Call() {
  return (
    <div>
      <h1>Call</h1>
      <div className='center-container'>

        <form className='callpage-container'>
          <label>
            Insert your desk number to call the MailBot:<br></br>
            <input type="text" name="name" />
          </label>
          <br></br>
          <input type="submit" className='callbutton' value="Call MailBot" />
        </form>
      </div>

    </div>
    
  )
}

export default Call