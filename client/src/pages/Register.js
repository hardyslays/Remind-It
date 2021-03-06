import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';

function Register() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-type':'application/JSON',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        
        const data = await res.json()
        console.log(data);
        if(res.status !== 200) {
            alert(data.message)
        }
        else {
            alert('Register succesful')
            navigate('/login')
        }
    }


  return (
    <>  
        <Navbar/>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} >
            <input value={name} placeholder="name" onChange={e => setName(e.target.value)}/>
            <input value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>

            <input type="submit" value="Register" />
        </form>    
    </>
  )
}

export default Register