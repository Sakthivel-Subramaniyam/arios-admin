import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Users = () => {

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "ARIOS | User"
 }, []);

  return <div className="page-wrapper"> 
    <div className="page-title-bar">
      <div className="title">
        <h3>User Maintainence</h3>
      </div>
      <div className="button-wrapper">
      <button onClick={() => { navigate("/newuser") }} className="btn-success"> Add New User </button>
      </div>
    </div>
    
  </div>;
};

export default Users;
