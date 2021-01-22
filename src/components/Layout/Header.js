import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';


// components
import SignIn from './../Modal/SignIn';
import AddBusiness from './../Modal/AddBusiness';


// img
import logo from '../../assets/img/menuhuts_logo.png';
// import user from '../../assets/img/user.png';



function Header() {

    return (
        <Router>
            <Navbar fixed="top">
                <Container fluid>
                    <Link to={`/`} className="navbar-brand">
                        <img src={logo} className="nav-logo" alt="Menuhuts" />
                    </Link>



                    <ul className="navbar-right">
                        <li>
                            <SignIn />
                        </li>

                        <li>
                            <AddBusiness />                            
                        </li>
                    </ul>
                </Container>
            </Navbar >
        </Router>
    );
}

export default Header;