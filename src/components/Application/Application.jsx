import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Application = () => {

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "ARIOS | Application"
 }, []);

  return <div className="page-wrapper"> 
    <div className="page-title-bar">
      <div className="title">
        <h3>Application Maintainence</h3>
      </div>
      <div className="button-wrapper">
      <button onClick={() => { navigate("/ad/newapp") }} className="btn-success"> Add Application </button>
      </div>
    </div>
    
  </div>;
};

export default Application;
