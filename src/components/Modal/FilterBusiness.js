import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';


function FilterBusiness() {

    const [show, setShow] = useState(false);

    const filterBusinesssClose = () => setShow(false);
    const filterBusinesssShow = () => setShow(true);

    return (
        <>
            <Link to={``} className="filter" onClick={filterBusinesssShow}><i className="fas fa-filter"></i> Filter</Link>

            <Modal show={show} onHide={filterBusinesssClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Filter</span> Restaurant</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="divide-item">
                            <h4>Delivery Type</h4>
                            <Row>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Delivery" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Pickup" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="divide-item">
                            <h4>Business Status</h4>
                            <Row>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Open" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Close" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="divide-item">
                            <h4>Cuisines</h4>
                            <Row>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="American Food" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Dessert" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Drinks" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Fast Food" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Food" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="divide-item no-border">
                            <h4>Category</h4>
                            <Row>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Beef Lamb" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Chicken Burger" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Chips and sides" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Chocolate brownie" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Deal" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Fish Burgers" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Kids Burgers" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Milkshakes" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Shakes and Smoothies" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Vegan Burgers" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Check type="checkbox" label="Vegetarian Burgers" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" variant="secondary" className="box">Apply</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterBusiness;