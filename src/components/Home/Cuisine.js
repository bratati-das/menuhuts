import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// img
import americanFood from '../../assets/img/american.png';
import desertFood from '../../assets/img/donut.png';
import chineseFood from '../../assets/img/chinese.png';
import drinksFood from '../../assets/img/cola.png';
import japanFood from '../../assets/img/ramen.png';
import riceFood from '../../assets/img/rice.png';
import mexicoFood from '../../assets/img/taco.png';


const options = {
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,

        },
        400: {
            items: 2,
        },
        500: {
            items: 3,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
            // nav: true,
        },
        992: {
            items: 5,
            // nav: true,
        },
        1200: {
            items: 7,
            // nav: true,
        },
    },
};


class Cuisine extends React.Component {
    render() {
        return (
            <div className="cuisine">
                <Container fluid>
                    <Col className="cuisine-card">
                        <OwlCarousel className="owl-theme" {...options}>
                            <Link to={``} className="item">
                                <img src={americanFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Amerian Food</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={desertFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Dessert</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={chineseFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Chinese Food</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={drinksFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Drinks</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={japanFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Japanese Cuisine</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={riceFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Rice</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={mexicoFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Mexican Food</h5>
                            </Link>
                            <Link to={``} className="item">
                                <img src={drinksFood} className="cuisine-icon" alt="Menuhuts" />
                                <h5>Drinks</h5>
                            </Link>
                        </OwlCarousel>
                    </Col>
                </Container>
            </div>
        )
    };
}


export default Cuisine;