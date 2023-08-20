import React from 'react'
import "../login.scss"


const Login = () => {
  return (
    <>
      <div  id="bg">
      <form action="/">
        <div class="form-field">
          <input type="email" placeholder="Email / Username" />
        </div>
        
        <div class="form-field">
          <input type="password" placeholder="Password" />
        </div>
        
        <div class="form-field">
          <button class="btn" type="submit">Log in</button>
        </div>
      </form>
      </div>

     
    </>
  )
}

export default Login