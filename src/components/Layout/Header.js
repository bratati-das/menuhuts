import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';


// components
import SignIn from './../Modal/SignIn';
import AddBusiness from './../Modal/AddBusiness';
import ChangeOrderType from './../Modal/ChangeOrderType';
import Cart from './Cart';


// img
import logo from '../../assets/img/menuhuts_logo.png';
// import user from '../../assets/img/user.png';



function Header() {

    return (
        <Router>
            <Navbar fixed="top" expand="lg">
                <Container fluid>
                    <Link to={`/`} className="navbar-brand">
                        <img src={logo} className="nav-logo" alt="Menuhuts" />
                    </Link>



                    <div className="nav-inner-container">

                        <ul className="navbar-right">
                            <li>
                                <SignIn />
                            </li>

                            <li>
                                <Cart />
                            </li>

                            <li>
                                <AddBusiness />
                                {/* <ChangeOrderType /> */}
                            </li>
                        </ul>

                        <Navbar.Toggle aria-controls="navbarScroll" />

                    </div>

                    <Navbar.Collapse id="navbarScroll">
                        <ul>
                            <li><SignIn /></li>
                            <li><AddBusiness /></li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Router>
    );
}

export default Header;