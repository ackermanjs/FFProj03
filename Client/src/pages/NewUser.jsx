import React, { useState } from 'react'
import "../components/NewUser.css";
// import SignUp from "./SignUp";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NewUser = () => {
    const [userFormData, setData] = useState({first_name:"", last_name:"", email:"", password:""})
    const handleFormSubmit = async(event) =>{
      const {name, value} = event.target; 
      console.log(name, value);
    }

  return (
<div>
      <div className="newuser-section">
      <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Enter First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="LastName" placeholder="Enter Last Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
        {/* <div className="newuser-container"><SignUp /></div> */}
        <div className="newuser-text-container">
          <h1 className="newuser-title"></h1>
        </div>
      </div>
    </div>  )
}

export default NewUser