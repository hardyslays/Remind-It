import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from 'react'

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {

    const [login, setLogin] = useState(false)

    const logout = () => {
        setLogin(false)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        
        const token = localStorage.getItem('token')
        setLogin(token ? true : false)

        return () => {
            
        };
    }, []);

  return (
    <div className="App">
        <h1>App</h1>
        {(login === true)? 1 : 0}
        <br />
    <BrowserRouter>
        <Routes >
            <Route path='/' element={<Home login={login}/>}  />
            <Route path='/register' element={<Register login={login}/>} exact />
            <Route path='/login' element={<Login login={login} setLogin={setLogin}/>} exact />
            <Route path='/dashboard' element={<Dashboard login={login} logout={logout}/>} exact />
        </Routes>
    </BrowserRouter>

    <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default App;
