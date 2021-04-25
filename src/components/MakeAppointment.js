import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
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
      },
      body: JSON.stringify({
          petName,
          species,
          age,
          description,
          date,
          slot,
           
        }),
    }
    return fetch(`http://localhost:8080/api/${id}/appointment`, requestOptions)
    .then(handleResponse)
    .then(history.push('/'))
    // const res2 = await 
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
    console.log(stuff);
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
  
  const handleScheduled = (newdate) => {
    
    console.log(newdate)
    setSlot(newdate.getHours());
    setDate(newdate);
    console.log(slot)
    
    if(slot == newdate.getHours() && date == newdate){
      // submit();
      console.log("Entered")
      history.push('/')
    }else{
      console.log("something is wrong")
    }
    
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
          // console.log(loadSlot);
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
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      10,
      0,
      0
    );
  
    const isValid = slotTime.getTime() != occupiedSlot_1.getTime() &&
                    slotTime.getTime() != occupiedSlot_2.getTime() &&
                    slotTime.getTime() != occupiedSlot_3.getTime() &&
                    slotTime.getTime() < eveningTime.getTime(); 
                    
    
     console.log(slotTime);
    // console.log(slotTime.getDate());
    return isValid;
  }

  return(
    
    <div className= "container justify-content-around" style={{width:'30%'}} >
      <form onSubmit = {submit}>
        <h1 className="h3 mb-3 fw-normal">Make an Appointment</h1>
        
        <input name="petName" value = {petName} onChange= {onChangePetName} type="text" className="form-control" placeholder="Pet's Name" required/>

        {/* <input name="species" value = {species} onChange= {onChangeSpecies} type="text" className="form-control" placeholder="Species" required/> */}
        
        <select name="species" value = {species} onChange= {onChangeSpecies} type="text" className="form-control" placeholder="Species" required>
          <option defaultValue >--Please pick a species--</option>
          <option value="Arachnid">Arachnid</option>
          <option value="Baby Snapping Turtle">Baby Snapping Turtle</option>
          <option value="Bantha">Bantha</option>
          <option value="Camel">Camel</option>
          <option value="Cat">Cat</option>
          <option value="Crawdad">Crawdad</option>
          <option value="Dewback">Dewback</option>
          <option value="Dog">Dog</option>
          <option value="Ewok">Ewok</option>
          <option value="Fish">Fish</option>
          <option value="Flerken">Flerken</option>
          <option value="Frog">Frog</option>
          <option value="Gooberfish">Gooberfish</option>
          <option value="Grass Carp">Grass Carp</option>
          <option value="Green Sunfish">Green Sunfish</option>
          <option value="Gungan">Gungan</option>
          <option value="Houndeye">Houndeye</option>
          <option value="Ichthyosaur">Ichthyosaur</option>
          <option value="Jawa">Jawa</option>
          <option value="Kaiju">Kaiju</option>
          <option value="Mink">Mink</option>
          <option value="Muskrat">Muskrat</option>
          <option value="Old Man Yoda">Old Man Yoda</option>
          <option value="Penguin">Penguin</option>
          <option value="Porg">Porg</option>
          <option value="Rancor">Rancor</option>
          <option value="Skunk">Skunk</option>
          <option value="Tauntaun">Tauntaun</option>
          <option value="Tiger">Tiger</option>
          <option value="Velociraptor">Velociraptor</option>
          <option value="Vortigaunt">Vortigaunt</option>
          <option value="Wampa">Wampa</option>
          <option value="Warg">Warg</option>
          
        </select>
        
        
        <input name="age" value = {age} onChange= {onChangeAge} type="text" className="form-control" placeholder="Age" required/>
        <input name="description" value = {description} onChange= {onChangeDescription} type="text" className="form-control" placeholder="Description of Illness" required/>
        <DayTimePicker 
          timeSlotSizeMinutes={60}
          onConfirm={handleScheduled}
          timeSlotValidator={timeSlotValidator}

        />
        {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button> */}
      </form>
    </div>
    
   )

 }

export default MakeAppointment