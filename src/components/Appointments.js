import React, { useEffect, useState } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import { Table } from 'react-bootstrap';

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
        (appoint,i) => 
        
        (
          <tr key={appoint.id} >
            <th>{i+1}</th>
            <th>{appoint.petName}</th>
            <th>{ (new Date(appoint.date)).toLocaleDateString() }</th> 
            <th>{appoint.species}</th>
            <th>{appoint.description}</th>
          </tr>
        )
      )
      console.log(appoints.id);
      
      return appoints;
    }
  }
  const newAppointment = AppointmentAlgo(list)
  return (
    <div className= "container justify-content-around">
      <br/>
      <h3>List of your Appointments :</h3>
      
      {/* <table style={{width:'50%'}} classNames="table"> */}
      <Table striped bordered hover responsive size="sm">
        <tbody>
        <tr>
          <th>#</th>
          <th>Pet Name</th>
          <th>Date</th>
          <th>Species</th>
          <th>Description</th>
        </tr>
        {newAppointment}
        </tbody>
      {/* </table> */}
      </Table>
    </div>
    
  )

}

export default Appointments