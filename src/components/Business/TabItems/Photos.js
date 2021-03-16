import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, } from "react-bootstrap";


// img
import prodImg1 from './../../../assets/img/prod-1.jpg';
import prodImg2 from './../../../assets/img/prod-2.jpg';
import prodImg3 from './../../../assets/img/prod-6.jpg';
import prodImg4 from './../../../assets/img/prod-4.jpg';
import prodImg5 from './../../../assets/img/rest7.jpg';
import prodImg6 from './../../../assets/img/prod-6.jpg';
import prodImg7 from './../../../assets/img/rest8.jpg';
import prodImg8 from './../../../assets/img/rest9.jpg';
import prodImg9 from './../../../assets/img/rest11.jpg';
import prodImg10 from './../../../assets/img/rest3.jpg';
import prodImg11 from './../../../assets/img/rest5.jpg';
import prodImg12 from './../../../assets/img/rest6.jpg';


function Photos() {
    return (
        <>
            <div className="other-container business-photos">
                <Row>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg1} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg2} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg3} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg4} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg5} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg6} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg7} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg8} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg9} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg10} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg11} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <img src={prodImg12} className="gallery-img" alt="Menuhuts" />
                    </Col>
                    <Col className="text-center"><Button variant="primary" type="submit">Load More</Button></Col>
                </Row>
            </div>
        </>
    );
}

export default Photos;