import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


// img
import logo from '../../assets/img/footer_logo.png';
import appStore from '../../assets/img/app-store.png';
import playStore from '../../assets/img/play-store.png';


function Footer() {
    return (
        <footer>
            <Container fluid>
                <Col>
                    <div className="ftr-top">
                        <Row>
                            <Col md={6} sm={6}>
                                <img src={logo} className="logo" alt="Menuhuts" />

                                <div className="download-app">
                                    <Link to={``}>
                                        <img src={appStore} alt="Menuhuts" />
                                    </Link>
                                    <Link to={``}>
                                        <img src={playStore} alt="Menuhuts" />
                                    </Link>
                                </div>
                            </Col>
                            <Col md={3} sm={3}>
                                <ul className="other-links row">
                                    <li className="col-12"><Link to={``}>About Us</Link></li>
                                    <li className="col-12"><Link to={``}>Our Products</Link></li>
                                    <li className="col-12"><Link to={``}>Pricing</Link></li>
                                    <li className="col-12"><Link to={``}>Privacy</Link></li>
                                </ul>
                            </Col>
                            <Col md={3} sm={3}>
                                <ul className="other-links row">
                                    <li className="col-12"><Link to={``}>Contact Us</Link></li>
                                    <li className="col-12"><Link to={``}>Help</Link></li>
                                    <li className="col-12"><Link to={`/Profile`}>Profile</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="ftr-btm">
                        <ul className="social">
                            <li><Link to={``}><i className="fab fa-facebook-square"></i></Link></li>
                            <li><Link to={``}><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to={``}><i className="fab fa-instagram"></i></Link></li>
                        </ul>

                        <div className="payment-accept">
                            <span>we accept</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="126.889" height="20.619" viewBox="0 0 126.889 20.619">
                                <g id="Group_33" data-name="Group 33" transform="translate(-1165 -2991)">
                                    <g id="symbols" transform="translate(1165 2976.446)">
                                        <g id="Group_24" data-name="Group 24" transform="translate(18.993 16.832)">
                                            <g id="Group_23" data-name="Group 23">
                                                <path id="Path_7" data-name="Path 7" d="M19.483,16.8,16.722,33h4.416L23.9,16.8Z" transform="translate(-16.722 -16.799)" />
                                            </g>
                                        </g>
                                        <g id="Group_26" data-name="Group 26" transform="translate(4.387 16.847)">
                                            <g id="Group_25" data-name="Group 25">
                                                <path id="Path_8" data-name="Path 8" d="M14.766,16.815l-4.325,11.05L9.98,26.2A17.337,17.337,0,0,0,3.862,19.48L7.817,32.993l4.673-.008,6.955-16.173Z" transform="translate(-3.862 -16.812)" />
                                            </g>
                                        </g>
                                        <g id="Group_28" data-name="Group 28" transform="translate(0 16.694)">
                                            <g id="Group_27" data-name="Group 27">
                                                <path id="Path_9" data-name="Path 9" d="M8.828,17.993A1.777,1.777,0,0,0,6.9,16.677H.057L0,17c5.328,1.293,8.854,4.407,10.317,8.152Z" transform="translate(0 -16.677)" />
                                            </g>
                                        </g>
                                        <g id="Group_30" data-name="Group 30" transform="translate(26.173 16.554)">
                                            <g id="Group_29" data-name="Group 29">
                                                <path id="Path_10" data-name="Path 10" d="M31.993,19.939a8.153,8.153,0,0,1,3.305.62l.4.187.6-3.512a11.4,11.4,0,0,0-3.956-.68c-4.364,0-7.44,2.2-7.464,5.347-.028,2.327,2.191,3.627,3.867,4.4,1.721.8,2.3,1.3,2.29,2.01C31.019,29.4,29.66,29.9,28.392,29.9a9.27,9.27,0,0,1-4.158-.848l-.569-.259-.621,3.627a13.986,13.986,0,0,0,4.92.863c4.642,0,7.659-2.172,7.691-5.537.019-1.841-1.159-3.246-3.711-4.4-1.545-.752-2.49-1.252-2.481-2.01C29.463,20.659,30.265,19.939,31.993,19.939Z" transform="translate(-23.043 -16.554)" />
                                            </g>
                                        </g>
                                        <g id="Group_32" data-name="Group 32" transform="translate(38.475 16.85)">
                                            <g id="Group_31" data-name="Group 31">
                                                <path id="Path_11" data-name="Path 11" d="M46.157,16.815H42.745a2.2,2.2,0,0,0-2.314,1.345L33.874,33.01h4.638s.756-2,.928-2.434l5.655.007c.132.566.538,2.427.538,2.427h4.1ZM40.711,27.259c.363-.93,1.759-4.529,1.759-4.529-.024.044.36-.937.588-1.547l.3,1.4,1.023,4.678Z" transform="translate(-33.874 -16.815)" />
                                            </g>
                                        </g>
                                    </g>
                                    <path id="mastercard" d="M21.185,0a9.985,9.985,0,0,0-5.571,1.691,10.041,10.041,0,1,0-5.571,18.393,9.985,9.985,0,0,0,5.571-1.691A10.041,10.041,0,1,0,21.185,0Zm0,18.254a8.216,8.216,0,0,1-7.049-4h1.055a.915.915,0,1,0,0-1.83H13.324a8.173,8.173,0,0,1-.26-1.147h3.591a.915.915,0,0,0,0-1.83H12.993A8.151,8.151,0,0,1,13.159,8.3h2.033a.915.915,0,1,0,0-1.83h-1.4a8.212,8.212,0,1,1,7.394,11.785Zm0,0" transform="translate(1232 2991)" />
                                    <g id="paypal" transform="translate(1274.999 2991)">
                                        <path id="Path_12" data-name="Path 12" d="M84.345,127.843v.089a6.554,6.554,0,0,1-2.422,5.378,7.253,7.253,0,0,1-4.446,1.528H74.642c-.044,0-.142,0-.212.008a.959.959,0,0,0-.029.143c0,.018-.005.036-.008.054l-.906,5a1.87,1.87,0,0,1-1.841,1.538h-.173l-.063.409a1.153,1.153,0,0,0,1.138,1.327h2.2a1.151,1.151,0,0,0,1.133-.947l.8-4.39c0-.009,0-.017,0-.026.073-.533.29-.558.7-.558h2.492a5.873,5.873,0,0,0,3.6-1.235,5.283,5.283,0,0,0,1.942-4.341V130.5a3.706,3.706,0,0,0-1.066-2.653Zm0,0" transform="translate(-68.521 -122.694)" />
                                        <path id="Path_13" data-name="Path 13" d="M3.74,17.123l.906-5A1.276,1.276,0,0,1,6.121,10.9H8.957a5.436,5.436,0,0,0,5.621-5.66v-1.5C14.578,1.439,12.7,0,10.413,0H6.121C2.834.041,2.584-.022,1.956,4.175L.008,16.916a.626.626,0,0,0,.618.721h2.5a.625.625,0,0,0,.615-.514Zm0,0" transform="translate(0 0)" />
                                    </g>
                                </g>
                            </svg>

                        </div>

                        <div className="copyright">
                            © 2020 MenuHuts™. All Rights Reserved.
                        </div>

                    </div>
                </Col>
            </Container>
        </footer>
    );
}

export default Footer;