import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        // console.log(username);
        // console.log(password);
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
                },
           
            body: JSON.stringify({ username, password }),
        };
        console.log("loggin in")
        return fetch('http://localhost:8080/login', requestOptions)
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', user.headers.get("Authorization"));
                localStorage.setItem('username', user.headers.get("UserName"));
                return user;
            })
        
        
        
    }

    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status !== 200 ) {
                    // auto logout if 401 response returned from api
                    // logout();
                    console.log("Not 200 "+localStorage.getItem('user'));
                    // window.location.reload();
                }

                const error = (data && data.message) || response.statusText;
                console.log("error is :"+error);
                console.log("YOYOY");
                return Promise.reject("Unauthorized");
            }
            // window.location.reload();
            console.log(response)
            return response;
        });
    }
    const onChangePW = (e) =>{
        
        setPassword(e.target.value)
    }
    const onChangeUser = (e) =>{
        
        setUsername(e.target.value)
    }
    return(
        <form onSubmit = {submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
       
       <input name="username" value = {username} onChange= {onChangeUser} type="text" className="form-control" placeholder="Email address" required/>

       <input name="password" value={password} onChange= {onChangePW} type="password" className="form-control" placeholder="Password" required/>
       
       <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
 </form>
    );
};

export default Login;