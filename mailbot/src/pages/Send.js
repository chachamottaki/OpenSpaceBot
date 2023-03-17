import React from 'react'

function Send() {
  return (

    <div>
      <h1>Send</h1>
      <div className='center-container'>

        <form className='callpage-container'>
          <label>
            Insert your colleague's desk number to send the MailBot:<br></br>
            <input type="text" name="name" />
          </label>
          <br></br>
          <input type="submit" className='callbutton' value="Send MailBot" />
        </form>
      </div>
    </div>
    

  )
}

export default Send