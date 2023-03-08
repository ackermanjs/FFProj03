import React from 'react'
import "../components/ReturnUser.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// commemted out by Austin
import SignIn from "./SignIn";
// commemted out by Austin

const ReturnUser = () => {
  return (
<div>
      <div className="returninguser-section">
      <Form>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SIGN IN
      </Button>
    </Form>
    {/* commemted out by Austin */}
        <div className="returninguser-container"><SignIn /></div> 
       {/* commemted out by Austin */}
        <div className="returninguser-text-container">
          <h1 className="returninguser-title"></h1>
        </div>
      </div>
    </div>  )
}

export default ReturnUser