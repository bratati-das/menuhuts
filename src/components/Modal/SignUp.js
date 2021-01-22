import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';


function SignUp() {

    const [show, setShow] = useState(false);

    const signUpClose = () => setShow(false);
    const signUpShow = () => setShow(true);

    return (
        <>
            <Link className="secondary" to={``} onClick={signUpShow}>Create an account</Link>
            <Modal show={show} onHide={signUpClose}>
                <Modal.Header closeButton>
                    <h1 className="modal-title"><span>Sign</span> up now</h1>
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
                            <Form.Label>Enter your email</Form.Label>
                            <Form.Control type="text" className="box" id="" placeholder="Email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter a password</Form.Label>
                            <Form.Control type="password" className="box" id="" placeholder="Password" />
                            <i className="far fa-eye-slash show-password"></i>
                            {/* <i className="far fa-eye show-password"></i> */}
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
                            <Button variant="secondary" type="submit" className="box">Sign up</Button>
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-center">
                            <span>Already use MenuHuts? <Link className="secondary" to={``}>Sign in</Link></span>
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

export default SignUp;