import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import './scss/style.css';

const HeaderAdmin = () => {
  // Parse the user data from localStorage and set the initial state
  const [userid, setUserid] = useState(() => {
    const storedData = localStorage.getItem('user');
    return storedData ? JSON.parse(storedData) : null;
  });
  
  const [user, setUser] = useState({}); 
  const catavatar = "https://cdn-icons-png.flaticon.com/512/9703/9703596.png"; 

  useEffect(() => {
    if (userid && userid.Id) {
      axios.get(`http://localhost:5096/api/User/${userid.Id}`)
        .then(result => {
          setUser(result.data.data);
         
        })
        .catch(err => console.error(err));
    }
  }, [userid]);
  return (
    <div className="home-section">
      <nav>
        <div className="sidebar-button"></div>
        <div className="profile-details">
          <img src={user?.avatar || catavatar} alt="Profile Avatar" />
          <span className="admin_name">{user ? user.name : "Admin"}</span>
        </div>
      </nav>
    </div>
  );
}

export default HeaderAdmin;
