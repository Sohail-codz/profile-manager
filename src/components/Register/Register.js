import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css'

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        gender: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.email === formData.email);
        if (userExists) {
          alert('User with this email already exists!');
          return;
        }
        existingUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Registration successful!');
        navigate('/');  
      };
    
      return (
        <div className={styles.mainContainer}>
        <div className = {styles.container}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputs}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputs}>
              <label>Phone Number:</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputs}>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputs}>
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.inputs}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <div className={styles.loginButton} onClick={()=> navigate('/')}>
            Go to Login
          </div>
        </div>
        </div>
      );
}

export default Register