import React, { useState } from 'react'
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
/**
* @author
* @function MakeAppointment
**/

const MakeAppointment = (props) => {
  const[petName, setPetName] = useState("");
  const[species, setSpecies] = useState("");
  const[age, setAge] = useState("");
  const[description, setDescription] = useState("");
  const[date, setDate] = useState(new Date());
  const[slot, setSlot] = useState("");
  
  const onChangePetName = (e) =>{
    setPetName(e.target.value);
  }
  const onChangeSpecies = (e) =>{
    setSpecies(e.target.value);
  }
  const onChangeAge = (e) => {
    setAge(e.target.value);
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const onChangeDate = (e) => {
    setDate(e.target.value);
  }
  const onChangeSlot = (e) => {
    setSlot(e.target.value);
  }

  const submit = async () => {
    let id = localStorage.getItem("userId");
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': localStorage.getItem("user")
      }
    }
    const res = await fetch(`http://localhost:8080/api/${id}/appointment`, requestOptions);
    const res2 = handleResponse(res)
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
        console.log(response.headers)
        return response;
    });
  }
  

  return(
    <div className= "container justify-content-around" fluid={true}>
      <form onSubmit = {submit}>
        <h1 className="h3 mb-3 fw-normal">Make an Appointment</h1>
        
        <input name="petName" value = {petName} onChange= {onChangePetName} type="text" className="form-control" placeholder="Pet's Name" required/>

        <input name="species" value = {species} onChange= {onChangeSpecies} type="text" className="form-control" placeholder="Species" required/>
        <input name="age" value = {age} onChange= {onChangeAge} type="text" className="form-control" placeholder="Age" required/>
        <input name="description" value = {description} onChange= {onChangeDescription} type="text" className="form-control" placeholder="Description" required/>
        <input name="date" value = {date} onChange= {onChangeDate} type="text" className="form-control" placeholder="Date" required/>
        <ReactTimeslotCalendar
          initialDate={moment().format()}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </form>
    </div>
    
   )

 }

export default MakeAppointment