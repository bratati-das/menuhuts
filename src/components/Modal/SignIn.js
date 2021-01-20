import React from 'react';
import { Link } from "react-router-dom";


function SignIn() {
    return (
        <div className="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title"><span>Sign</span> in now</h1>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
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
                                <button type="submit" className="btn btn-secondary box">Sign in</button>
                            </div>

                            <div className="form-group d-flex justify-content-between">
                                <span>New to MenuHuts? <Link className="secondary" to={``} data-toggle="modal" data-target="#signUp" data-dismiss="modal">Create an account</Link></span>
                                <Link to={``} data-toggle="modal" data-target="#forgotPassword" data-dismiss="modal">Forgot?</Link>
                            </div>

                            <div className="form-group otherwise">
                                <span>Or</span>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-facebook"><i className="fab fa-facebook-f"></i> Continue with Facebook</button>
                                <button type="submit" className="btn btn-google"><i className="fab fa-google"></i> Continue with Google</button>
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

export default SignIn;