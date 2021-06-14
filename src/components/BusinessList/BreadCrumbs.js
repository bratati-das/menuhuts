import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container, Col } from "react-bootstrap";


// components
import FilterBusiness from '../Modal/FilterBusiness';


function BreadCrumbs() {
    return (
        <Router>
            <section className="breadcumbs">
                <Container fluid>
                    <Col>
                        <div className="body-top">
                            <ul>
                                <li><Link to={``}>Australia</Link></li>
                                <li><Link to={``}>Adelaide</Link></li>
                            </ul>
                            
                            <FilterBusiness />
                            
                        </div>
                    </Col>
                </Container>
            </section>
        </Router>
    );
}

export default BreadCrumbs;