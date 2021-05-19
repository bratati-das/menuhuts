import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';


function ChangeOrderType() {

    const [show, setShow] = useState(false);

    const changeOrderTypeClose = () => setShow(false);
    const changeOrderTypeShow = () => setShow(true);

    return (
        <>
            <Link to={``} onClick={changeOrderTypeShow}><span>Change Order Type</span></Link>
            <Modal show={show} onHide={changeOrderTypeClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Where</span> are you?</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group>
                            <Form.Label>Select your area</Form.Label>
                            <div className="select-group">
                                <Form.Control as="select" className="box" id="">
                                    <option selected>Choose area</option>
                                    <option value="1">America</option>
                                    <option value="2">India</option>
                                    <option value="3">Africa</option>
                                </Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" className="btn btn-secondary box">Submit</Button>
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-between">
                            <Button type="submit" className="btn btn-transparent box">Change to pickup</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChangeOrderType;