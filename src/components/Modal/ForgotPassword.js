import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';


function ForgotPassword() {

    const [show, setShow] = useState(false);

    const forgotPasswordClose = () => setShow(false);
    const forgotPasswordShow = () => setShow(true);

    return (
        <>
            <Link to={``} onClick={forgotPasswordShow}>Forgot?</Link>
            <Modal show={show} onHide={forgotPasswordClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Forgot</span> Password</h1></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your email</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="Email" />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="secondary" type="submit" className="box">Forgot password</Button>
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-center">
                            <span>Already use MenuHuts? <Link className="secondary" to={``}>Sign in</Link></span>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ForgotPassword;