import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

/**
* @author
* @function Logout
**/

const Logout = (props) => {
    useEffect(() => {
        window.location.reload();
        localStorage.clear();
    },
    [])
    
  return(
    <Redirect to={"login"}></Redirect>
   )

}

export default Logout