import React from 'react';
import { Link } from "react-router-dom";

// components
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return (
        <div className="main-body">
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;