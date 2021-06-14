import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Form, Button, } from 'react-bootstrap';

// components
import ProductOptions from './ProductOptions';

import ProductListingSingle from './../../Business/ProductListingSingle'

// img
import prodImg from './../../../assets/img/prod-1.jpg';


function ProductDetails() {

    const [show, setShow] = useState(false);

    const productDetailsClose = () => setShow(false);
    const productDetailsShow = () => setShow(true);

    return (
        <>
            <Link to={``} onClick={productDetailsShow}>
                <ProductListingSingle/>
                {/* <span>Product details</span> */}
            </Link>

            <Modal show={show} onHide={productDetailsClose} className="product-details-popup">
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <img src={prodImg} className="product-image" alt="Menuhuts" />
                    <div className="product-descriptions">
                        <h2><span>Paneer</span> Pakora</h2>
                        <p>A flour tortilla layered with seasoned beef, warm nacho cheese sauce, a crispy tostada shell, crispy lettuce, ripe tomatoes and topped with cool sour cream all wrapped in our signature crunch wrap fold and
grilled to go.</p>
                    </div>

                    <ProductOptions />

                    <div className="special-comments">
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" className="box" id="" placeholder="Special comments" />
                            </Form.Group>
                        </Form>
                    </div>

                </Modal.Body>
                <Modal.Footer className="product-footer">
                    <div className="plus-minus-cont">
                        <Button><i className="fas fa-minus"></i></Button>
                        <span>1</span>
                        <Button><i className="fas fa-plus"></i></Button>
                    </div>

                    <Button type="submit" variant="primary">Add to Cart <span className="total-price">$9.99</span></Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductDetails;