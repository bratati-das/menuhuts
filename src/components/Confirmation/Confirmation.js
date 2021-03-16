import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col, } from 'react-bootstrap';

// components

import ProductOrder from './ProductOrder';
import Booking from './Booking';





function Confirmation() {
    return (
        <>
            <ProductOrder />
            {/* <Booking /> */}
            
                            
        </>
    );
}

export default Confirmation;