import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Nav/>
      <main className="form-signin">
        
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
    </BrowserRouter>
 </div>
  );
}

export default App;
