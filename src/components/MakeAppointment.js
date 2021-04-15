import React, { useEffect, useState } from 'react'
import moment from 'moment';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
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
  const[loadSlot, setLoadSlot] = useState({});
  
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
    console.log(e)
    setSlot(e.target.value);
  }
  useEffect (() =>{
    getSlots();
    
  },[])
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
  const getSlots = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': localStorage.getItem("user")
      }
    }
    const res = await fetch(`http://localhost:8080/api/slots`, requestOptions);
    const stuff = await res.json();

    return setLoadSlot(stuff);
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
  
  const handleScheduled = () => {
    
  };
  
  function timeSlotValidator(slotTime) {
    const slotObj = loadSlot
    let occupiedSlot_1 = new Date
    let occupiedSlot_2 = new Date
    let occupiedSlot_3 = new Date
    for (let i=0; i<slotObj.length; i++){
      let slotdayObj = new Date(loadSlot[i].day)
      if(slotdayObj.getFullYear() == slotTime.getFullYear() && 
         slotdayObj.getMonth() == slotTime.getMonth() &&
         slotdayObj.getDate() == slotTime.getDate()){
          console.log(loadSlot);
          if(slotObj[i].slot_1){
            occupiedSlot_1 = new Date(slotTime.getFullYear(), slotTime.getMonth(), slotTime.getDate(),
              1,
              0,
              0
            );
            
          }
          
          if(slotObj[i].slot_2){
            occupiedSlot_2 = new Date(slotTime.getFullYear(), slotTime.getMonth(), slotTime.getDate(),
              2,
              0,
              0
            );
            
          }
          if(slotObj[i].slot_3){
            occupiedSlot_3 = new Date(slotTime.getFullYear(), slotTime.getMonth(), slotTime.getDate(),
              3,
              0,
              0
            );
            
         }
      
      }
    }
    
  
    const isValid = slotTime.getTime() != occupiedSlot_1.getTime() &&
                    slotTime.getTime() != occupiedSlot_2.getTime() &&
                    slotTime.getTime() != occupiedSlot_3.getTime()
                    
    
    //  console.log(slotObj);
    // console.log(slotTime.getDate());
    return isValid;
  }

  return(
    
    <div className= "container justify-content-around" >
      <form onSubmit = {submit}>
        <h1 className="h3 mb-3 fw-normal">Make an Appointment</h1>
        
        <input name="petName" value = {petName} onChange= {onChangePetName} type="text" className="form-control" placeholder="Pet's Name" required/>

        <input name="species" value = {species} onChange= {onChangeSpecies} type="text" className="form-control" placeholder="Species" required/>
        <input name="age" value = {age} onChange= {onChangeAge} type="text" className="form-control" placeholder="Age" required/>
        <input name="description" value = {description} onChange= {onChangeDescription} type="text" className="form-control" placeholder="Description" required/>
        <input name="date" value = {date} onChange= {onChangeDate} type="text" className="form-control" placeholder="Date" required/>
        <DayTimePicker 
          timeSlotSizeMinutes={60}
          onConfirm={handleScheduled}
          timeSlotValidator={timeSlotValidator}

        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </form>
    </div>
    
   )

 }

export default MakeAppointment