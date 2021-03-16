import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col, Form } from 'react-bootstrap';

// components
import UserDetails from './UserDetails';
import OrderDetails from './OrderDetails';


function Checkout() {
    return (
        <>
            <section className="no-banner checkout">
                <Container fluid>
                    <Col>
                        <Form>
                            <Row>
                                <Col md={7} sm={12}>
                                    <UserDetails />
                                </Col>

                                <Col md={5} sm={12}>
                                    <OrderDetails />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Container>
            </section>
        </>
    );
}

export default Checkout;