import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Bookappointment = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        blood_type: '', // Use the correct key here
        appointment_date: '', // Correct key here
        appointment_time: '',
        location: '',
    });

    // Initialize navigate hook
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to book appointment');
            
            alert('Appointment booked successfully');

            // Redirect to home page after successful submission
            navigate('/'); // Use navigate to redirect
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            {/* HEADER SECTION */}
            <header className="container-fluid">
                <div className="header-top">
                    <div className="container">
                        <div className="row col-det">
                            <div className="col-lg-6 d-none d-lg-block">
                                <ul className="ulleft">
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        vitalflow123@gmail.com
                                        <span> | </span>
                                    </li>
                                    <li>
                                        <i className="far fa-clock"></i>
                                        Service Time: {new Date().toLocaleString()}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <ul className="ulright">
                                    <li>
                                        <i className="fas fa-hand-holding"></i>
                                        <a href="/donate" style={{ color: 'white' }}>Donate</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="menu-jk" className="header-bottom">
                    <div className="container">
                        <div className="row nav-row">
                            <div className="col-md-3 logo">
                                <img src="assets/images/logo-png.png" alt="Logo" />
                            </div>
                            <div className="col-md-9 nav-col">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarNav"
                                        aria-controls="navbarNav"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#about">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#gallery">Gallery</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#process">Process</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#blog">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/#contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <form onSubmit={handleSubmit} className="appointment-form">
            <h2 style={{ textAlign: 'center',}}>Book Appointment</h2>
                <label htmlFor="full-name">Full Name:</label>
                <input
                    type="text"
                    id="full-name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="blood-type">Blood Type:</label>
                <select
                    id="blood-type"
                    name="blood_type" // Sync key with backend
                    value={formData.blood_type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select your blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>

                <label htmlFor="appointment-date">Appointment Date:</label>
                <input
                    type="date"
                    id="appointment-date"
                    name="appointment_date" // Sync key with backend
                    value={formData.appointment_date}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="appointment-time">Preferred Time:</label>
                <input
                    type="time"
                    id="appointment-time"
                    name="appointment_time"
                    value={formData.appointment_time}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="location">Location:</label>
                <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                >
                    <option value="" aria-disabled="true">Select a location</option>
                    <option value="Location 1">Juhapura</option>
                    <option value="Location 2">Sanand</option>
                    <option value="Location 3">Iscon</option>
                </select>

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default Bookappointment;
