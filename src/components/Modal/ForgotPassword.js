import React from 'react';
import { Link } from "react-router-dom";


function ForgotPassword() {
    return (
        <div className="modal fade" id="forgotPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title"><span>Forgot</span> Password</h1>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Enter your account’s email below. We will send you a verification code to reset your password.</p>
                        <form>
                            <div className="form-group">
                                <label for="" className="form-label">Enter your email</label>
                                <input type="text" className="form-control box" id="" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-secondary box">Forgot password</button>
                            </div>

                            <div className="form-group d-flex justify-content-center">
                                <span>Already use MenuHuts? <Link className="secondary" to={``} data-toggle="modal" data-target="#signIn" data-dismiss="modal">Sign in</Link></span>
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

export default ForgotPassword;