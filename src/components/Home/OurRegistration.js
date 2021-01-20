import React from 'react';
import { Link } from "react-router-dom";


// img
import img1 from '../../assets/img/registartion1.png';
import img2 from '../../assets/img/registartion2.png';


function OurRegistration() {
    return (
        <section className="our-registration">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="res-cont row">
                        <div className="items col-md-6 col-sm-6">
                            <img src={img1} alt="Menuhuts" />
                            <div className="description">
                                <h3>Hungry, you're in the right place</h3>
                                <Link to={``}>Create a account to order</Link>
                            </div>
                        </div>
                        <div className="items col-md-6 col-sm-6">
                            <img src={img2} alt="Menuhuts" />
                            <div className="description">
                                <h3>Manage your business</h3>
                                <Link to={``}>Create a business account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurRegistration;