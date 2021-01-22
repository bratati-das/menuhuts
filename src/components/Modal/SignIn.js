import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';

// components
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

// img
import logo from '../../assets/img/menuhuts_logo.png';
import user from '../../assets/img/user.png';


function SignIn() {

    const [show, setShow] = useState(false);

    const signInClose = () => setShow(false);
    const signInShow = () => setShow(true);

    return (
        <>
            <Link to={``} onClick={signInShow}>
                <img src={user} className="nav-icon" alt="Menuhuts" />
                <span>Sign in</span>
            </Link>

            <Modal show={show} onHide={signInClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Sign</span> in now</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your email</Form.Label>
                            <Form.Control type="email" className="box" placeholder="Email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter a password</Form.Label>
                            <Form.Control type="password" className="box" placeholder="Password" />
                            <i className="far fa-eye-slash show-password"></i>
                            {/* <i className="far fa-eye show-password"></i> */}
                        </Form.Group>

                        <Form.Group>
                            <Button variant="secondary" type="submit" className="box">Sign in</Button>
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-between">
                            <span>New to MenuHuts? <SignUp /></span>
                            <ForgotPassword />
                        </Form.Group>

                        <Form.Group className="otherwise">
                            <span>Or</span>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" className="btn-facebook"><i className="fab fa-facebook-f"></i> Continue with Facebook</Button>
                            <Button type="submit" className="btn-google"><i className="fab fa-google"></i> Continue with Google</Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SignIn;