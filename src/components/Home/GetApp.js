import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Button } from "react-bootstrap";

// img
import appLogo from '../../assets/img/app-logo.png';
// import android from '../../assets/img/android.svg';
// import androidThm from '../../assets/img/android_thm.svg';
// import iPhone from '../../assets/img/apple.svg';

function GetApp() {
    return (
        <section className="get-app">
            <Container fluid>
                <Col>
                    <div className="app-cont">
                        <div className="app-left">
                            <div className="app-icon">
                                <img src={appLogo} alt="Menuhuts" />
                            </div>

                            <h1 className="container-heading">
                                Get your <span>restaurants </span> in your own pocket
                        </h1>
                        </div>

                        <div className="app-redirect">
                            <Button className="outline">
                                <i className="fab fa-android"></i>
                                <span>Android</span>
                            </Button>
                            <Button className="outline">
                                <i className="fab fa-apple"></i>
                                <span>iPhone</span>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    )
}


export default GetApp;