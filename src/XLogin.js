import React, { useState } from 'react';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure both fields are filled
    if (!username || !password) {
      setMessage("Both fields are mandatory");
      return;
    }

    // Check credentials
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
      setIsLoggedIn(true); // Set login status to true
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={{ width: '300px', margin: '100px auto', textAlign: 'center' }}>
      <h1>Login</h1>
      {isLoggedIn ? (
        <div style={{ marginTop: '20px', color: 'green' }}>
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', marginTop: '5px' }}
              required
            />
          </div>
          <button type="submit" style={{ width: '100%' }}>
            Submit
          </button>
        </form>
      )}
      {!isLoggedIn && message && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default XLogin;
