import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";


function BreadCrumbs() {
    return (
        <section className="breadcumbs">
            <Container fluid>
                <Col>
                    <div className="body-top">
                        <ul>
                            <li><Link to={``}>Australia</Link></li>
                            <li><Link to={``}>Adelaide</Link></li>
                        </ul>
                        <Link to={``} className="filter"><i className="fas fa-filter"></i> Filter</Link>

                    </div>
                </Col>
            </Container>
        </section>
    );
}

export default BreadCrumbs;