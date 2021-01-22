import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';


function AddBusiness() {

    const [show, setShow] = useState(false);

    const addBusinessClose = () => setShow(false);
    const addBusinessShow = () => setShow(true);

    return (
        <>
            <Link to={``} className="add-business" onClick={addBusinessShow}>Add Business</Link>
            <Modal show={show} onHide={addBusinessClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Let’s</span> get started</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your first name</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="First name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter your last name</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="Last name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter your mobile number</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="Mobile number" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter your business name</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="Business name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Select your country</Form.Label>
                            <div className="select-group">
                                <Form.Control as="select" className="box" id="">
                                    <option selected>Choose country</option>
                                    <option value="1">America</option>
                                    <option value="2">India</option>
                                    <option value="3">Africa</option>
                                </Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Select your city</Form.Label>
                            <div className="select-group">
                                <Form.Control as="select" className="box" id="">
                                    <option selected>Choose city</option>
                                    <option value="1">Adelaide</option>
                                    <option value="2">Albany</option>
                                    <option value="3">Belconnen</option>
                                </Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter your address</Form.Label>
                            <Form.Control as="textarea" className="box" id="" placeholder="Address" />
                        </Form.Group>

                        <Form.Group>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check1" />
                                <label className="form-check-label" for="check1">
                                    Accepting <Link className="secondary" to={``}>terms of service</Link> and <Link className="secondary" to={``}>privacy policy</Link>
                                </label>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <button type="submit" className="btn btn-secondary box">Next </button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddBusiness;