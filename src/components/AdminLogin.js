import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
/**
* @author
* @function AdminLogin
**/

const AdminLogin = (props) => {
    let history = useHistory()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const submit = (e) =>{
        e.preventDefault();
        if(username != "adminlogin"){
            console.log("wrong username");
        }
        if(password != "1234"){
            console.log("wrong password");
        }

    }
    const onUsernameChange =(e) =>{
        setUsername(e.target.value);
        console.log(username);
    }
    const onPwChange =(e) =>{
        setPassword(e.target.value);
        console.log(password);
    }
  return(
    <div className="container justify-content-around w-25 p-3">
        <br/>
        <h3>Admin Login</h3>
        <Form onSubmit = {submit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control value ={username} onChange = {onUsernameChange} type="username" placeholder="username" required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control value= {password} onChange = {onPwChange} type="password" placeholder="password" required/>
            </Form.Group>
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </Form>
    </div>
   )

 }

export default AdminLogin