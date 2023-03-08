import React from 'react'
import "../components/NewUser.css";
import SignUp from "./components/SignUp";

const NewUser = () => {
  return (
<div>
      <div className="newuser-section">
        <div className="newuser-container"><SignUp /></div>
        <div className="newuser-text-container">
          <h1 className="newuser-title"></h1>
        </div>
      </div>
    </div>  )
}

export default NewUser