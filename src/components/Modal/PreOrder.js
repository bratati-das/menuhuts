import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';


// img
import logo1 from '../../assets/img/rest-logo1.png';


function PreOrder() {

    const [show, setShow] = useState(false);

    const preOrderClose = () => setShow(false);
    const preOrderShow = () => setShow(true);

    return (
        <>
            <Link to={``} onClick={preOrderShow}>
                <span>Pre Order</span>
            </Link>

            <Modal show={show} onHide={preOrderClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Pre</span> order</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="business-detl">
                        <img src={logo1} className="busn-logo" alt="Menuhuts" />
                        <h3>Jack in the Box (400 Geary St)</h3>
                    </div>
                    <Form>
                        <Form.Group className="divide-item pre-order-option">
                            <h4>Please choose any Menu</h4>
                            <Row>
                                <Col sm={12}>
                                    <Form.Check type="radio" label="Australian foods" />
                                </Col>
                                <Col sm={12}>
                                    <ul className="days">
                                        <li className="available">Sunday</li>
                                        <li className="available">Monday</li>
                                        <li className="available">Tuesday</li>
                                        <li className="disable">Wednesday</li>
                                        <li className="available">Friday</li>
                                        <li className="disable">Saturday</li>
                                    </ul>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={12}>
                                    <Form.Check type="radio" label="Fish Menu" />
                                </Col>
                                <Col sm={12}>
                                    <ul className="days">
                                        <li className="disable">Sunday</li>
                                        <li className="disable">Monday</li>
                                        <li className="available">Tuesday</li>
                                        <li className="disable">Wednesday</li>
                                        <li className="available">Friday</li>
                                        <li className="available">Saturday</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="divide-item pre-order-option no-border">
                            <h4>Select Date and Time</h4>
                            <Row>
                                <Col md={6} sm={12}>
                                    <div className="select-group">
                                        <Form.Control as="select" className="box" id="">
                                            <option selected>Pre order date</option>
                                            <option value="1">Date 1</option>
                                            <option value="2">Date 2</option>
                                            <option value="3">Date 3</option>
                                        </Form.Control>
                                    </div>
                                </Col>

                                <Col md={6} sm={12}>
                                    <div className="select-group">
                                        <Form.Control as="select" className="box" id="">
                                            <option selected>Pre order time</option>
                                            <option value="1">Time 1</option>
                                            <option value="2">Time 2</option>
                                            <option value="3">Time 3</option>
                                        </Form.Control>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group>
                            <Button type="submit" variant="secondary" className="box">Pre order</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PreOrder;