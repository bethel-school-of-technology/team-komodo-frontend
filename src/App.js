import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Nav/>
      <main className="form-signin">
        
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />

        </main>
    </BrowserRouter>
 </div>
  );
}

export default App;
