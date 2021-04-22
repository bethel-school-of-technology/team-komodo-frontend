import React from 'react'
import { Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
    let history = useHistory();
    const submit = () =>{
        history.push("/")
    }
  return(
    <div className="container justify-content-around w-25 p-3">
        <br/>
        <h3>Contact Us</h3>
        <Form onSubmit = {submit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="Name" required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="000-000-0000" required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tell us what you think!</Form.Label>
                <Form.Control as="textarea" rows={3} required/>
            </Form.Group>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </Form>
    </div>
   )

 }

export default ContactUs