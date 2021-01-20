import React from 'react';
import { Link } from "react-router-dom";


function AddBusiness() {
    return (
        <div className="modal fade" id="addBusiness" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title"><span>Let’s</span> get started</h1>
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
                                <label for="" className="form-label">Enter your mobile number</label>
                                <input type="text" className="form-control box" id="" placeholder="Mobile number" />
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Enter your business name</label>
                                <input type="text" className="form-control box" id="" placeholder="Business name" />
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Select your country</label>
                                <div className="select-group">
                                    <select className="form-control box" id="">
                                        <option selected>Choose country</option>
                                        <option value="1">America</option>
                                        <option value="2">India</option>
                                        <option value="3">Africa</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Select your city</label>
                                <div className="select-group">
                                    <select className="form-control box" id="">
                                        <option selected>Choose city</option>
                                        <option value="1">Adelaide</option>
                                        <option value="2">Albany</option>
                                        <option value="3">Belconnen</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="" className="form-label">Enter your address</label>
                                <textarea className="form-control box" id="" placeholder="Address"></textarea>
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
                                <button type="submit" className="btn btn-secondary box">Next </button>
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

export default AddBusiness;