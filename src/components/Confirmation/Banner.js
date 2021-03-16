import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Col } from 'react-bootstrap';

// components



function Banner() {
    return (
        <>
            <section className="banner google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                <Container fluid>
                    <Col>
                        <div className="order-info-cont">
                            <div className="order-status">
                                <svg id="pan" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="Group_161" data-name="Group 161" transform="translate(0 0)">
                                        <path id="Path_80" data-name="Path 80" d="M21.131,24.748a.829.829,0,0,0-1.176-.033l-5.365,5.059H2.193a.831.831,0,0,0-.833.833,6.178,6.178,0,0,0,6.17,6.17H9.6a6.175,6.175,0,0,0,6.153-5.806L21.1,25.924A.828.828,0,0,0,21.131,24.748Z" transform="translate(-1.36 -16.777)" fill="#ff6937" />
                                        <path id="Path_81" data-name="Path 81" d="M10.29,11.466a.831.831,0,0,0-.833.833v4.92a.833.833,0,0,0,1.666,0V12.3A.831.831,0,0,0,10.29,11.466Z" transform="translate(-6.758 -8.097)" fill="#ff6937" />
                                        <path id="Path_82" data-name="Path 82" d="M31.543,11.466a.831.831,0,0,0-.833.833v4.92a.833.833,0,1,0,1.666,0V12.3A.831.831,0,0,0,31.543,11.466Z" transform="translate(-20.927 -8.097)" fill="#ff6937" />
                                        <path id="Path_83" data-name="Path 83" d="M20.922,1.36a.831.831,0,0,0-.833.833V7.174a.833.833,0,1,0,1.666,0V2.193a.834.834,0,0,0-.833-.833Z" transform="translate(-13.846 -1.36)" fill="#ff6937" />
                                    </g>
                                </svg>
                                <span>Pending your order</span>
                            </div>

                            <div className="delivery-time">
                                <span>2:25</span>
                                <span>PM</span>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </>
    );
}

export default Banner;