import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
          navigate('/dashboard', { state: { userData: user } });
        } else {
          alert('Incorrect email or password.');
        }
      };
  
    return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputs}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputs}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={styles.registerButton} onClick={() => navigate('/register')}>
          Go to Register
        </div>
      </div>
    </div>
    );
  };

export default Login