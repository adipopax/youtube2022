import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">SIIT Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Sign in</button>
          <p>No account? Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login