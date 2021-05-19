import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';


// components
import SignIn from './../Modal/SignIn';
import AddBusiness from './../Modal/AddBusiness';
import ProductDetails from './../Modal/ProductDetails/ProductDetails';
import FilterBusiness from './../Modal/FilterBusiness';
import PreOrder from './../Modal/PreOrder';
import ChangeOrderType from './../Modal/ChangeOrderType';
import Cart from './Cart';


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
                            <Cart />
                        </li>

                        <li>
                            <AddBusiness />                            
                            {/* <ProductDetails /> */}
                            {/* <FilterBusiness /> */}
                            {/* <PreOrder /> */}
                            {/* <ChangeOrderType /> */}
                        </li>
                    </ul>
                </Container>
            </Navbar >
        </Router>
    );
}

export default Header;