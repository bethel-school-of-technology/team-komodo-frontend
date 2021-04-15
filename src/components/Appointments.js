import React, { useEffect, useState } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';

/**
* @author
* @function Appointments
**/

const Appointments = (props) => {
  
  const [list, setList] = useState([]);
  const data = [];

  useEffect(() => {
    getAppointmentsList();

  }, [])

  const getAppointmentsList = async () => {
    let id = localStorage.getItem("userId");
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': localStorage.getItem("user")
      }
    }
    const res = await fetch(`http://localhost:8080/api/${id}/appointments`, requestOptions);
    const stuff = await res.json();
    console.log("stuff");
    console.log(stuff.content);
    return setList(stuff.content)
  }

  const AppointmentAlgo = (e) => {
    console.log("e")
    console.log(e)
    if (typeof e === "undefined") {
      console.log("undefined")
      return (<div>no appointments</div>)

    } else {
      console.log(e);

      const appoints = e.map(
        appoint => (
          <li key={appoint.id} >{appoint.petName} {appoint.date} </li>
        )
      )
      console.log(appoints);
      // for (let i = 0; i < appoints.length; i++) {
      //   data.push(appoints[i]);
      // }
      return appoints;
    }
  }
  const newAppointment = AppointmentAlgo(list)
  return (
    <ul>
      {newAppointment}
    </ul>
  )

}

export default Appointments