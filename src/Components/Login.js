import React, { useState } from 'react'
import Header from "./Header";
import '../login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <>
      <Header />
      <div className="login">
        <div className="log-form">
          <h1 className="wb">Welcome back,</h1>
          <h1 className='li2'>Log in</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="log-email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              className="log-pass"
              id="pass"
              name="pass"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button className="login-btn" type="submit">Login</button>
            <button className="gog-login-btn" type="submit"><img className='g' src={"../Glogo.png"} alt="g-log-img" /><p className='ins-txt'>Sign in with Google</p></button>
            <button className="twt-login-btn" type="submit"><img className='t' src={"../Tlogo.png"} alt="t-log-img" /><p className='ins-txt'>Sign in with Twitter</p></button>
          </form>
          <div className="sin">
          <p className='sinup-red'>Don't have an account</p>
          <p className="sinup">Sign Up</p>
          </div>
        </div>
        <div className="log-img">
          <img className='loginimage' src={"../Loginimage.png"} alt="log-img" />
          
        </div>
      </div>
    </>
  )
}
