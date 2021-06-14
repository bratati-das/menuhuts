import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';


const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Tax not Included with Price
    </Tooltip>
);



function OrderDetails() {
    return (
        <>
            <div className="cart-details">
                <div className="business-items-cont">
                    <div className="business-items">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="from">From <Link>Jack in the Box (6133 E Ben White Blvd, Austin)</Link></span>
                    </div>

                    <div className="business-items">
                        <i className="fas fa-clock"></i>
                        <span>Arriving in 30-40 min</span>
                    </div>

                    <div className="business-items">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Taco Bell (7255 Mission St.)</span>
                    </div>

                </div>

                <div className="ordered-items-cont">
                    <div className="ordered-item">
                        <span className="quantities">1</span>

                        <div className="ordered-description">
                            <div className="product-desc">
                                <h5 className="p-name">Chicken Pakora</h5>

                                <ul className="extra-items">
                                    <li className="title">Seasoned Fries</li>
                                    <li>Nacho Fries</li>
                                    <li>Seasoned Fries</li>
                                </ul>

                                <ul className="extra-items">
                                    <li className="title">Seasoned Fries</li>
                                    <li>Nacho Fries</li>
                                    <li>Seasoned Fries</li>
                                </ul>
                            </div>

                            <div className="product-right">
                                <h5 className="p-price">$9.99</h5>
                            </div>
                        </div>
                    </div>

                    <div className="ordered-item">
                        <span className="quantities">1</span>

                        <div className="ordered-description">
                            <div className="product-desc">
                                <h5 className="p-name">Paneer Pakora</h5>

                            </div>

                            <div className="product-right">
                                <h5 className="p-price">$9.99</h5>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="calculation-box">
                    <div className="calc-item">
                        <span className="left">Subtotal  •  2 items</span>
                        <span className="right">$19.98</span>
                    </div>

                    <div className="calc-item">
                        <span className="left">Delivery fee</span>
                        <span className="right">$3.00</span>
                    </div>

                    <div className="calc-item">
                        <span className="left">Tax (10%)
                                                <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button><i className="fas fa-info-circle"></i></Button>
                            </OverlayTrigger>
                        </span>
                        <span className="right">$5.00</span>
                    </div>

                    <div className="calc-item">
                        <span className="left">Service fee (10%)</span>
                        <span className="right">$4.00</span>
                    </div>

                    <div className="calc-item">
                        <span className="left">Tips</span>
                        <span className="right">$0.00</span>
                    </div>

                    <div className="calc-item total">
                        <span className="left">Total</span>
                        <span className="right">$31.98</span>
                    </div>
                </div>

                <Link to={`/Confirmation`}><Button variant="secondary" className="place-order">Place order</Button></Link>
            </div>

        </>
    );
}

export default OrderDetails;