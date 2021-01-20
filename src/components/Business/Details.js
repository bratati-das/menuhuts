import React from 'react';
import { Link } from "react-router-dom";


import background from './../../assets/img/rest1.jpg';
import logo from '../../assets/img/rest-logo1.png';



function Details() {
    return (
        <>
        <section className="business-offer">
            <div className="container-fluid">
                <div className="col-12">
                    <ul>
                        <li>Delivery free minimum order $100</li>
                        <li>10% OFF for first time order</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section className="business-description">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="board">
                        <ul>
                            <li>6133 E Ben White Blvd, Austin, TX 78741</li>
                            <li>0393975451</li>
                            <li>09:00–21:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Details;