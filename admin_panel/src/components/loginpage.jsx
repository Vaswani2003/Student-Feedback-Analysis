import React from 'react';
import axios from 'axios';

// import logo from './media/logo.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleLoginClick = () => {
    axios.post('http://localhost:5000/api/login', {
      username: username,
      password: password,
    })
    .then(response => {
      console.log('Login successful:', response.data);
      alert('Login successful!');
      navigate('/dashboard');
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
      alert('Invalid credentials');
    });
  };
  
  return (
    <div className="Main">
      <div className="navbar">
        <div className="navbar-text">
          <p>GITAM UNIVERSITY ADMIN PANEL</p>
        </div>
        <div className="navbar-logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </div>

      <div className="login-form">
        <div className="login-heading"><h1>Log In</h1></div>
       
        <div className="inputfield">
          <p>Username</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="inputfield">
          <p>Password</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={handleLoginClick}>Login</button>
      </div>

      
    </div>
  );
}

export default Login;