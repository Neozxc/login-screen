import React from 'react'
import './Border.css'

export const Border = () => {
  return (
    <div className='borderContainer'>
        {/* <div className="middleLine"></div> */}
          <h1>Welcome Back!</h1>


          <form action="submit">
            <div className="usernameInput">
              <input type="text" placeholder='Username' />
            </div>
            <div className="passwordInput">
              <input type="text" placeholder='Password' />
            </div>
          </form>

            <button>Login</button>
    </div>
  )
}
