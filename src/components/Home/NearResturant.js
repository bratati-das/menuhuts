import React, { Component } from 'react';
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// img
import restImg1 from '../../assets/img/rest1.jpg';
import restImg2 from '../../assets/img/rest2.jpeg';
import restImg3 from '../../assets/img/rest3.jpg';

import logo1 from '../../assets/img/rest-logo1.png';
import logo2 from '../../assets/img/rest-logo2.png';
import logo3 from '../../assets/img/rest-logo3.png';


const options = {
    loop: false,
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1199: {
            items: 3,
        },
    },
};
class NearResturant extends React.Component {
    render() {

        return (
            <section className="near-resturants">
                <div className="container-fluid">
                    <div className="col-12">
                        <h1 className="container-heading">
                            <span>Restaurants</span> near me
                        </h1>

                        <OwlCarousel className="owl-theme" {...options}>
                            <Link to={``} className="item">
                                <div className="rest-cover">
                                    <img src={restImg1} className="cover-img" alt="Menuhuts" />
                                    <img src={logo1} className="rest-logo" alt="Menuhuts" />
                                    <span className="rest-status open">Open</span>
                                    <span className="rest-offer">Buy 1, Get 1 Free</span>
                                </div>

                                <div className="rest-description">
                                    <div className="destails">
                                        <h3>Jack in the Box (400 Geary St)</h3>
                                        <ul>
                                            <li className="phone">0393975451</li>
                                            <li className="hours">09:00–21:00</li>
                                        </ul>
                                    </div>
                                    <span className="rating">4.8</span>
                                </div>

                                <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                            </Link>
                            <Link to={``} className="item">
                                <div className="rest-cover">
                                    <img src={restImg2} className="cover-img" alt="Menuhuts" />
                                    <img src={logo2} className="rest-logo" alt="Menuhuts" />
                                    <span className="rest-status close">Close</span>
                                </div>

                                <div className="rest-description">
                                    <div className="destails">
                                        <h3>McDonald's® (Fillmore)</h3>
                                        <ul>
                                            <li className="phone">0393975451</li>
                                            <li className="hours">09:00–21:00</li>
                                        </ul>
                                    </div>
                                    <span className="rating">4.8</span>
                                </div>

                                <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                            </Link>
                            <Link to={``} className="item">
                                <div className="rest-cover">
                                    <img src={restImg3} className="cover-img" alt="Menuhuts" />
                                    <img src={logo3} className="rest-logo" alt="Menuhuts" />
                                    <span className="rest-status open">Open</span>
                                </div>

                                <div className="rest-description">
                                    <div className="destails">
                                        <h3>Burger King (3900 Geary Boulevard)</h3>
                                        <ul>
                                            <li className="phone">0393975451</li>
                                            <li className="hours">09:00–21:00</li>
                                        </ul>
                                    </div>
                                    <span className="rating">4.8</span>
                                </div>

                                <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                            </Link>
                            <Link to={``} className="item">
                                <div className="rest-cover">
                                    <img src={restImg2} className="cover-img" alt="Menuhuts" />
                                    <img src={logo2} className="rest-logo" alt="Menuhuts" />
                                    <span className="rest-status close">Close</span>
                                </div>

                                <div className="rest-description">
                                    <div className="destails">
                                        <h3>McDonald's® (Fillmore)</h3>
                                        <ul>
                                            <li className="phone">0393975451</li>
                                            <li className="hours">09:00–21:00</li>
                                        </ul>
                                    </div>
                                    <span className="rating">4.8</span>
                                </div>

                                <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                            </Link>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        )
    };
}
export default NearResturant;

