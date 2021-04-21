import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState( []);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [redirect, setRedirect] = useState(true);
    let history = useHistory();
    
       
    const submit = async(e) => {
        e.preventDefault();
        return fetch('http://localhost:8080/api/user/register',  {
            method : 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accepts': 'application/json',
              },
            body : JSON.stringify({
                email,
                username,
                password
            })
        })
        .then(
          response =>{
            if(response.status == 200){
              history.push("/login");
            }
          }
        ) 
            
    
      }
      
      
    //   if(redirect){
    //     return <Redirect to = "/login"/>
    
    // }

       return (
        <form onSubmit ={submit} className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Create an Account</h1>

        <input type="email" className="form-control" placeholder="Email" required
         onChange={e => setEmail (e.target.value)}
         />
       
       <input type="username" className="form-control" placeholder="Username" required
         onChange={e => setUsername (e.target.value)}
       />

       <input type="password" className="form-control" placeholder="Password" required
         onChange={e => setPassword (e.target.value)}
       />
       
       <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
 </form>   
    )
  };

export default Register;