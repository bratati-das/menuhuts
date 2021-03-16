import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, } from "react-bootstrap";


function Offers() {
    return (
        <>
            <div className="other-container business-offers">
                <Row>
                    <Col>
                        <h5 className="sub-heading">Our special offers</h5>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Offers;