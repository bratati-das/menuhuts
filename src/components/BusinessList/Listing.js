import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// img
import restImg1 from '../../assets/img/rest1.jpg';
import restImg2 from '../../assets/img/rest2.jpeg';
import restImg3 from '../../assets/img/rest3.jpg';
import restImg4 from '../../assets/img/rest4.jpg';
import restImg5 from '../../assets/img/rest5.jpg';
import restImg6 from '../../assets/img/rest6.jpg';
import restImg7 from '../../assets/img/rest7.jpg';
import restImg8 from '../../assets/img/rest8.jpg';
import restImg9 from '../../assets/img/rest9.jpg';
import restImg10 from '../../assets/img/rest10.jpg';
import restImg11 from '../../assets/img/rest11.jpg';

import logo1 from '../../assets/img/rest-logo1.png';
import logo2 from '../../assets/img/rest-logo2.png';
import logo3 from '../../assets/img/rest-logo3.png';
import logo4 from '../../assets/img/rest-logo4.jpg';
import logo5 from '../../assets/img/rest-logo5.png';
import logo6 from '../../assets/img/rest-logo6.jpg';
import logo7 from '../../assets/img/rest-logo7.jpg';
import logo8 from '../../assets/img/rest-logo8.jpg';
import logo9 from '../../assets/img/rest-logo9.png';
import logo10 from '../../assets/img/rest-logo10.png';
import logo11 from '../../assets/img/rest-logo11.png';

function Listing() {
    return (
        <section className="business-list">
            <Container fluid>
                <Col>
                    <h1 className="container-heading">
                        10 Restaurants
                    </h1>

                    <Row>
                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg1} className="cover-img" alt="Menuhuts" />
                                <img src={logo1} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="fas fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg2} className="cover-img" alt="Menuhuts" />
                                <img src={logo2} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                <span className="rest-offer">Buy 1, Get 1 Free</span>
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg3} className="cover-img" alt="Menuhuts" />
                                <img src={logo3} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg4} className="cover-img" alt="Menuhuts" />
                                <img src={logo4} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                <span className="rest-offer">$0 Delivery Fee (Spend $15)</span>
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg5} className="cover-img" alt="Menuhuts" />
                                <img src={logo5} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg6} className="cover-img" alt="Menuhuts" />
                                <img src={logo6} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg7} className="cover-img" alt="Menuhuts" />
                                <img src={logo7} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg8} className="cover-img" alt="Menuhuts" />
                                <img src={logo8} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg9} className="cover-img" alt="Menuhuts" />
                                <img src={logo9} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status open">Open</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg10} className="cover-img" alt="Menuhuts" />
                                <img src={logo10} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status close">Close</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>

                        <Link to={`/Business`} className="item col-lg-4 col-md-6 col-sm-12">
                            <div className="rest-cover">
                                <img src={restImg11} className="cover-img" alt="Menuhuts" />
                                <img src={logo11} className="rest-logo" alt="Menuhuts" />
                                <span className="rest-status close">Close</span>
                                {/* <span className="rest-offer">Buy 1, Get 1 Free</span> */}
                                <span className="favorite"><i className="far fa-heart"></i></span>
                            </div>

                            <div className="rest-description">
                                <div className="destails">
                                    <h3>Jack in the Box (400 Geary St)</h3>
                                    <ul>
                                        <li className="phone">0393975451</li>
                                        <li className="hours">09:00–21:00</li>
                                        <li className="delivery-fee">$1.99 Delivery Fee</li>
                                    </ul>
                                </div>
                                <span className="rating">4.8</span>
                            </div>

                            <span className="rest-address">135 Nelson Place, Williamstown VIC 3016, Australia</span>
                        </Link>
                    </Row>
                </Col>
            </Container>
        </section>
    );
}

export default Listing;