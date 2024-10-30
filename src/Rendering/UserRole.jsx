import React, { useState } from 'react';
import Admin from './Admin';
import User from './User';
import Guest from './Guest';

const UserRole = () => {
  const [userRole, setUserRole] = useState("admin"); 

  return (
    <div className="App">
      {userRole === "admin" ? ( <Admin />) : userRole === "user" ? (<User /> ) : (  <Guest />   )}

      
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setUserRole("admin")}> Admin</button>
        <button onClick={() => setUserRole("user")}> User</button>
        <button onClick={() => setUserRole("guest")}> Guest</button>
      </div>
    </div>
  );
};

export default UserRole;
