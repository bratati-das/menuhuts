import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Button } from "react-bootstrap";


import background from './../../assets/img/rest1.jpg';
import logo from '../../assets/img/rest-logo1.png';



function Banner() {
    return (
        <section className="banner inner business" style={{ backgroundImage: `url(${background})` }}>
            <Container fluid>
                <Col>
                    <div className="business-container">
                        <div className="details">
                            <img src={logo} alt="Menuhuts" />
                            <div className="business-descp">
                                <h2>Jack in the Box (400 Geary St)</h2>
                                <ul>
                                    <li>$1.99 Delivery Fee</li>
                                    <li>25–35 Min</li>
                                    <li>4.5(200+)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="activity">
                            <Button><i class="fas fa-plus"></i>Add Reviews</Button>
                            <span class="favorite"><i class="far fa-heart"></i></span>
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    );
}

export default Banner;