import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup, } from "react-bootstrap";


function Banner() {
    return (
        <section className="banner inner">
            <Container fluid>
                <Col>
                    <h2>Your favorite food, delivered with MenuHuts</h2>

                    <Form>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-store"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control id="" placeholder="Enter business near me by zipcode" />
                            </InputGroup>

                            <Link to={`/Checkout`}><Button variant="primary" type="submit">Search</Button></Link>

                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </section>
    );
}

export default Banner;