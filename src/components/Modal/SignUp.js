import React from 'react';
import { Link } from "react-router-dom";


function SignUp() {
    return (
        <div className="modal fade" id="signUp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title"><span>Sign</span> up now</h1>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="" className="form-label">Enter your first name</label>
                                <input type="text" className="form-control box" id="" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Enter your last name</label>
                                <input type="text" className="form-control box" id="" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Enter your email</label>
                                <input type="text" className="form-control box" id="" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Enter a password</label>
                                <input type="password" className="form-control box" id="" placeholder="Password" />
                                <i className="far fa-eye-slash show-password"></i>
                                {/* <i className="far fa-eye show-password"></i> */}
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="check1" />
                                    <label className="form-check-label" for="check1">
                                        Accepting <Link className="secondary" to={``}>terms of service</Link> and <Link className="secondary" to={``}>privacy policy</Link>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-secondary box">Sign up</button>
                            </div>

                            <div className="form-group d-flex justify-content-center">
                                <span>Already use MenuHuts? <Link className="secondary" to={``} data-toggle="modal" data-target="#signIn" data-dismiss="modal">Sign in</Link></span>
                            </div>

                            <div className="form-group otherwise">
                                <span>Or</span>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-facebook"><i class="fab fa-facebook-f"></i> Continue with Facebook</button>
                                <button type="submit" className="btn btn-google"><i class="fab fa-google"></i> Continue with Google</button>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;