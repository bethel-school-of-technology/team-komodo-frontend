import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState( []);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const submit = async() => {
        Event.preventDefault();
        const response = await fetch( input = 'http://localhost:8000/api/register', init = {
            method = 'POST',
            headers:{'Content-Type': 'application/json'},
            body = JSON.stringify(value={
                name,
                email,
                password
            })
        });

        //code prior to hooking up the api
        //console.log({
        //    name
      //  email,
     //password
   //});
        const content = await response.json();
        console.log(content);
   };
    return (
        <form onSubmit ={submit}>
        <h1 className="h3 mb-3 fw-normal">Create an Account</h1>

        <input className="form-control" placeholder="Name" required
            onChange={e => setName (e.target.value)}
        />
       
       <input type="email" className="form-control" placeholder="Email address" required
         onChange={e => setEmail (e.target.value)}
       />

       <input type="password" className="form-control" placeholder="Password" required
         onChange={e => setPassword (e.target.value)}
       />
       
       <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
 </form>   
    );
};

export default Register;