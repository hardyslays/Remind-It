import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Home = ({login}) => {
    const navigate = useNavigate()

    useEffect( () => {
        if(login === true){
            navigate('/dashboard')
        }
        return () => {
        }
    })

    return (
        <div>
            <h1>Home page</h1>

            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Home;
