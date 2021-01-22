import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup, } from "react-bootstrap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Cuisine from './Cuisine';



function Banner() {
    return (
        <section className="banner">
            <Container fluid>
                <Col>
                    <h1>Your favorite restaurants?</h1>
                    <h4>Direct to your door in few minutes!</h4>

                    <Form>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control id="" placeholder="Enter business near me by zipcode" />
                            </InputGroup>

                            <InputGroup className="select-group">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><i className="fas fa-clock"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select">
                                    <option selected>Deliver now</option>
                                    <option value="1">Schedule for later</option>
                                </Form.Control>
                            </InputGroup>

                            <Link to={`/BusinessList`}><Button variant="primary" type="submit">Search</Button></Link>

                        </Form.Group>
                    </Form>


                    <h5 className="btm-txt">
                        <Link to={``} data-toggle="modal" data-target="#signUp">Register</Link> with your recent address
                    </h5>
                </Col>
            </Container>
            <Cuisine />
        </section>
    );
}

export default Banner;