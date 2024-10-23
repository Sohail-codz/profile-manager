// import React, {useState, useEffect} from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';

// function Dashboard() {
//     const location = useLocation();
//   const navigate = useNavigate();

//   const { userData } = location.state || {};

//   const [userDetails, setUserDetails] = useState(userData || {});

//   const [formData, setFormData] = useState(userData || {});

//   useEffect(() => {
//     if (!userData) {
//       navigate('/login');
//     }
//   }, [userData, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const userIndex = users.findIndex(user => user.email === userDetails.email);

//     if (userIndex !== -1) {
      
//       users[userIndex] = formData;

//       localStorage.setItem('users', JSON.stringify(users));

//       setUserDetails(formData);

//       alert('Details updated successfully!');
//     }
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <div>
//         <h3>Current User Details</h3>
//         <p><strong>Name:</strong> {userDetails.name}</p>
//         <p><strong>Email:</strong> {userDetails.email}</p>
//         <p><strong>Phone Number:</strong> {userDetails.number}</p>
//         <p><strong>Address:</strong> {userDetails.address}</p>
//         <p><strong>Gender:</strong> {userDetails.gender}</p>
//       </div>

//       <hr />

//       <h3>Edit User Details</h3>
//       <form onSubmit={handleSave}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email || ''}
//             disabled 
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="number"
//             value={formData.number || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address || ''}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select
//             name="gender"
//             value={formData.gender || ''}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <button type="submit">Save Changes</button>
//       </form>
//       <div onClick={() => navigate('/')}>
//         Logout
//       </div>
//     </div>
//   );
// };
  
// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';  // Import the CSS module

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userData } = location.state || {};

  const [userDetails, setUserDetails] = useState(userData || {});
  const [formData, setFormData] = useState(userData || {});

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === userDetails.email);

    if (userIndex !== -1) {
      users[userIndex] = formData;
      localStorage.setItem('users', JSON.stringify(users));
      setUserDetails(formData);
      alert('Details updated successfully!');
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Dashboard</h2>

      <div className={styles.userDetails}>
        <h3>Current User Details</h3>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone Number:</strong> {userDetails.number}</p>
        <p><strong>Address:</strong> {userDetails.address}</p>
        <p><strong>Gender:</strong> {userDetails.gender}</p>
      </div>

      <h3>Edit User Details</h3>
      <form onSubmit={handleSave} className={styles.form}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            disabled
            className={styles.input}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number || ''}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender || ''}
            onChange={handleChange}
            required
            className={styles.input}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className={styles.saveButton}>Save Changes</button>
      </form>

      <div className={styles.logoutButton} onClick={() => navigate('/')}>
        Logout
      </div>
    </div>
  );
}

export default Dashboard;
