import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


// img
import country from '../../assets/img/arc-de-triomphe.png';
import resturant from '../../assets/img/dinner.png';
import foody from '../../assets/img/eating.png';
import photo from '../../assets/img/image.png';
import review from '../../assets/img/rating.png';


function Stats() {
    return (
        <section className="stats">
            <Container fluid>
                <Col>
                    <div className="stats-cont">
                        <div className="item">
                            <div className="details">
                                <h3>Countries</h3>
                                <span>26K</span>
                            </div>
                            <img src={country} alt="Menuhuts" />
                        </div>

                        <div className="item">
                            <div className="details">
                                <h3>Resturants</h3>
                                <span>26K</span>
                            </div>
                            <img src={resturant} alt="Menuhuts" />
                        </div>

                        <div className="item">
                            <div className="details">
                                <h3>Foodies</h3>
                                <span>26K</span>
                            </div>
                            <img src={foody} alt="Menuhuts" />
                        </div>

                        <div className="item">
                            <div className="details">
                                <h3>Photos</h3>
                                <span>26K</span>
                            </div>
                            <img src={photo} alt="Menuhuts" />
                        </div>

                        <div className="item">
                            <div className="details">
                                <h3>Reviews</h3>
                                <span>26K</span>
                            </div>
                            <img src={review} alt="Menuhuts" />
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    );
}

export default Stats;