import React from 'react';
import { Link } from "react-router-dom";



function Banner() {
    return (
        <section className="banner inner">
            <div className="container-fluid">
                <div className="col-12">
                    <h2>Your favorite food, delivered with MenuHuts</h2>

                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-store"></i></span>
                                </div>
                                <input type="text" className="form-control" name="" id="" placeholder="Enter business near me by zipcode" />
                            </div>

                            <button type="submit" className="btn btn-primary">Search</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Banner;