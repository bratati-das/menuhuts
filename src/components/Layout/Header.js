import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


// components
import SignIn from './../Modal/SignIn';
import SignUp from './../Modal/SignUp';
import AddBusiness from './../Modal/AddBusiness';
import ForgotPassword from './../Modal/ForgotPassword';


// img
import logo from '../../assets/img/menuhuts_logo.png';
import user from '../../assets/img/user.png';



function Header() {
    return (
        <Router>
            <nav className="navbar fixed-top">
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand">
                        <img src={logo} className="nav-logo" alt="Menuhuts" />
                    </Link>

                    <ul className="navbar-right">
                        <li>
                            <Link to={``} data-toggle="modal" data-target="#signIn">
                                <img src={user} className="nav-icon" alt="Menuhuts" />
                                <span>Sign in</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={``} className="add-business" data-toggle="modal" data-target="#addBusiness">Add Business</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <SignIn/>
            <SignUp/>
            <AddBusiness/>
            <ForgotPassword/>
        </Router>
    );
}

export default Header;