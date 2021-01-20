import React from 'react';
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Cuisine from './Cuisine';



function Banner() {
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="col-12">
                    <h1>Your favorite restaurants?</h1>
                    <h4>Direct to your door in few minutes!</h4>

                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                                </div>
                                <input type="text" className="form-control" name="" id="" placeholder="Enter business near me by zipcode" />
                            </div>

                            {/* <div className="input-group select-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-clock"></i></span>
                                </div>
                                <select className="form-control" id="">
                                    <option selected>Deliver now</option>
                                    <option value="1">Schedule for later</option>
                                    
                                </select>
                            </div>                            */}

                            <Link to={`/BusinessList`}><button type="submit" className="btn btn-primary">Search</button></Link>

                        </div>
                    </form>


                    <h5 className="btm-txt">
                        <Link to={``} data-toggle="modal" data-target="#signUp">Register</Link> with your recent address
                    </h5>
                </div>
            </div>
            <Cuisine />
        </section>
    );
}

export default Banner;