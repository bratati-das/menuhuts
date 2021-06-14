import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Accordion, Card, Form, Button, } from 'react-bootstrap';



function ProductOptions() {


    return (
        <>
            <Accordion className="product-options" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="title">
                            <h5>Would you like to add this?</h5>
                            <span className="desc">Choose up to 3</span>
                        </div>
                        <span className="angle"><i className="fas fa-angle-down"></i></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" for="check1">
                                            <span>Lettuce</span>
                                            <span>+ $2.00</span>
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" for="check1">
                                            <span>Tomatoes</span>
                                            <span>+ $5.00</span>
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check1" />
                                        <label className="form-check-label" for="check1">
                                            <span>Onions</span>
                                            <span>+ $4.00</span>
                                        </label>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <div className="title">
                            <h5>How Spicy?</h5>
                            <span className="desc">Choose up to 1</span>
                        </div>
                        <span className="angle"><i className="fas fa-angle-down"></i></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Form>
                                <Form.Group>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="radio2" />
                                        <label className="form-check-label" for="radio1">
                                            <span>Low</span>
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="radio2" />
                                        <label className="form-check-label" for="radio1">
                                            <span>Medium</span>
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" value="" id="radio2" />
                                        <label className="form-check-label" for="radio1">
                                            <span>High</span>
                                        </label>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

export default ProductOptions;