import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
                <li class="nav-logo">
                    <img src={require('../../assets/images/Logo-Course1.jpg')} alt="Logo for Shubham Courses" width="70%"/>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/reactCrudProject/get/addCourses">Add Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/reactCrudProject/get/viewAllCourses">View Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/reactCrudProject/get/welcomeCourses">Welcome Page</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;