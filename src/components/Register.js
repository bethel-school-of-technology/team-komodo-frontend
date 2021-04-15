import React, { useState } from 'react';
import { Redirect } from 'react-router';

const Register = () => {
    const [name, setName] = useState( []);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [redirect, setRedirect] = useState(true);
    
    };
       
    const submit = async() => {
        Event.preventDefault();
        await fetch('http://localhost:8000/api/register',  {
            method : 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accepts': 'application/json',
              },
            body : JSON.stringify({
                name,
                username,
                password
            })
        });
    
      }
      
      
      if(redirect){
        return <Redirect to = "/login"/>
    
    }

       return (
        <form onSubmit ={submit}>
        <h1 className="h3 mb-3 fw-normal">Create an Account</h1>

        <input type="name" className="form-control" placeholder="Name" required
         onChange={e => setName (e.target.value)}
         />
       
       <input type="username" className="form-control" placeholder="Username" required
         onChange={e => setUsername (e.target.value)}
       />

       <input type="password" className="form-control" placeholder="Password" required
         onChange={e => setPassword (e.target.value)}
       />
       
       <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
 </form>   
    );

export default Register;