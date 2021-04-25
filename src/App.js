import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Appointments from './components/Appointments';
import MakeAppointment from './components/MakeAppointment';
import Geolocator from './components/Geolocator';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AllAppointments from './components/AllAppointments';




function App() {

  const [cities] = useState([
    {
        "location": "North American Office",
        "climate": "land",
        "species": "Arachnid, Cat, Dog, Ewok, Flerken, Houndeye, Old Man Yoda, Porg, Skunk, Tiger, Velociraptor, Vortigaunt, Warg",
        "lat": "49",
        "lng": "-120",
        "address": "1507 Amerigo Vespucci Avenida"
    },
    {
        "location": "Sahara Office",
        "climate": "desert",
        "species": "Bantha, Camel, Dewback, Jawa, Rancor",
        "lat": "33",
        "lng": "-3",
        "address": "2 Sonson Tatoo Ine Road"
    },
    {
        "location": "Indian Ocean Office",
        "climate": "water",
        "species": "Baby Snapping Turtle, Crawdad, Fish, Frog, Gooberfish, Grass Carp, Green Sunfish, Gungan, Ichthyosaur, Kaiju, Mink, Muskrat",
        "lat": "-35",
        "lng": "75",
        "address": "501 Kamino Camino"
    },
    {
        "location": "Antarctica Office",
        "climate": "cold",
        "species": "Penguin, Tauntaun, Wampa",
        "lat": "-67",
        "lng": "-75",
        "address": "1986 Echo Boulevard"
    }
  ]
  );

  return (
    <div className="App">
      {/* <Geolocator mappedCities={cities}></Geolocator> */}
         <Router>
        <Nav/>
        
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/locations" exact component={Home} />
          {/* <Route path="/geolocator" component={Geolocator} /> */}
          <Route exact path="/geolocator" render={(props) => <Geolocator {...props} mappedCities={cities} />} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/logout" component={Logout} />
          <Route path="/appointments" component={Appointments} />
          <Route path="/makeappointment" component={MakeAppointment} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/allappointments" component={AllAppointments} />

          </Switch>
      {/* <main className="form-signin">
        
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/appointments" component={Appointments} />
          <Route path="/makeappointment" component={MakeAppointment} />
          <Route path="/geolocator" component={Geolocator} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />

        </main> */}
        
    </Router>
 </div>
  );
}

export default App;
