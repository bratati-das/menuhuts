import React from 'react';
import { Link } from "react-router-dom";





function Cities() {
    return (
        <section className="choose-city">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="city-heading">
                        <h1 className="container-heading">
                            <span>Choose</span> your city
                        </h1>
                        <form className="select-country">
                            <div className="form-group">
                                <div className="input-group select-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-globe-americas"></i></span>
                                    </div>
                                    <select className="form-control" id="">
                                        <option selected>Australia</option>
                                        <option value="1">America</option>
                                        <option value="2">India</option>
                                        <option value="4">Africa</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <ul className="city-list row">
                        <li className="col-md-3 col-sm-6"><Link to={``}>Adelaide</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Albany</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Belconnen</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Brisbane</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Canberra</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Evanston</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Geelong</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Gold Coast</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Hobart</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Innisfail</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Northern Territory</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>OHalloran Hill</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Sunshine Coast</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Melbourne</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``}>Plympton</Link></li>
                        <li className="col-md-3 col-sm-6"><Link to={``} className="many-more">Many more</Link></li>
                    </ul>

                    {/* <form className="select-country-mob">
                        <div className="form-group">
                            <div className="input-group select-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-globe-americas"></i></span>
                                </div>
                                <select className="form-control" id="">
                                    <option selected>Australia</option>
                                    <option value="1">America</option>
                                    <option value="2">India</option>
                                    <option value="4">Africa</option>
                                </select>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </section>
    );
}

export default Cities;