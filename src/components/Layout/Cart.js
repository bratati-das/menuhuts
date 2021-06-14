import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Dropdown, Form, InputGroup, Button } from 'react-bootstrap';


// components

function Cart() {

    return (
        <Router>
            <Dropdown className="cart">
                <Dropdown.Toggle id="dropdown-basic">
                    <i className="fas fa-shopping-bag"></i> <span>2</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="cart-board">
                    <h1>Your order</h1>

                    <h3 className="order-from"><span>From</span> <Link>Jack in the Box (6133 E Ben White Blvd, Austin)</Link></h3>

                    <div className="added-item-cont">
                        <div className="added-item">
                            <Form>
                                <InputGroup className="select-group">
                                    <Form.Control as="select">
                                        <option selected>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form>

                            <div className="added-description">
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
                                    <i className="fas fa-pen"></i>
                                    <h5 className="p-price">$9.99</h5>
                                </div>
                            </div>
                        </div>

                        <div className="added-item">
                            <Form>
                                <InputGroup className="select-group">
                                    <Form.Control as="select">
                                        <option selected>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form>

                            <div className="added-description">
                                <div className="product-desc">
                                    <h5 className="p-name">Paneer Pakora</h5>
                                </div>

                                <div className="product-right">
                                    <i className="fas fa-pen"></i>
                                    <h5 className="p-price">$9.99</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to={`/Checkout`}><Button variant="secondary"><span className="total-items">2</span>Checkout<span className="total-price">$19.98</span></Button></Link>

                    <span className="free-delivery">
                    Add items worth $38.02 more for <span>FREE Delivery</span>
                    </span>
                </Dropdown.Menu>
            </Dropdown>
        </Router>
    );
}

export default Cart;