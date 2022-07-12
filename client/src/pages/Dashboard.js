import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    
    const [username, setUsername] = useState("user")

    const loadUserDashboard = () => {
        console.log("dashboard")

        //Use fetch to get user dashboard data from backend like this:
        fetch("http://localhost:5000/api/username", {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsername(data.username)
        })
    }

    // useEffect(() => {
    //     loadUserDashboard();
    // },[]);

    return (
        <>
            <h2>Dashboard</h2>
            <div>
                Hello {username}!!
            </div>
        </>
    )
}
export default Dashboard;
