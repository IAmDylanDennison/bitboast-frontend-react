import React from 'react';
import { Route, Routes, NavLink, BrowserRouter} from 'react-router-dom';

import './App.css';
import {Home} from './homepage';
import {Signup} from './signup';
import {Login} from './login';


function App() {
  return (
    <BrowserRouter>
    <div className="App Container">
     <h3 className='d-flex justify-content-center m-3'>
       Welcome to Bitboast!
     </h3>

     <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/login">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/signup">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
