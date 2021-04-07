import React, { useEffect } from 'react'

/**
* @author
* @function Logout
**/

const Logout = (props) => {
    useEffect(() => {
        window.location.reload();
        localStorage.clear();
    },[])
  return(
    <div>Logout</div>
   )

 }

export default Logout