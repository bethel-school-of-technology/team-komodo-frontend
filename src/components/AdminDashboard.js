import React from 'react'
import { Button } from './Button';
import './Button.css'
import './HeroSection.css';
/**
* @author
* @function AdminDashboard
**/

const AdminDashboard = (props) => {
    const allappointments = "allappointments"
    return (
        <div>
            <h1>Hello Admin, welcome to your dashboard</h1>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link={allappointments}>
                Check all appointments
            </Button>
        </div>
    )

}

export default AdminDashboard