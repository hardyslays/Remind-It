import React from 'react'
import {useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import { updateToken } from '../Redux/Reducer/auth';
import { URL_DASHBOARD, URL_REGISTER } from '../Helpers/urls';
import { useDispatch } from 'react-redux';

function Login({login, setLogin}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-type':'application/JSON',
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const res = await response.json()
        if(response.status !== 200) {
            alert(res.message)
        }
        else{
            // localStorage.setItem('token', res.data.token)
            // console.log(localStorage.getItem('token'))

            // setLogin(true)
            // alert('Login succesful')
            // navigate('/dashboard')
            console.log(res.data);
            dispatch(updateToken(res.data.token));
            navigate(URL_DASHBOARD)
        }
    }

  return (
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
            
            <input type="submit" value="Login" />
        </form>    
    </>
  )
}

export default Login