import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";

// components
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';
import FavouriteRestaurant from './FavouriteRestaurant';
import OrderHistory from './OrderHistory';
import BookingHistory from './BookingHistory';

// img
import avtar from './../../assets/img/client-2.jpg';


function Profile() {
    return (
        <section className="no-banner profile">
            <Container fluid>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="UpdateProfile">
                        <Row className="profile-row">
                            <Col md={4} sm={12} className="left-panel">
                                <div className="my-profile-info">
                                    <Form className="avtar-form">
                                        <Form.Group>
                                            <Form.File className="avtar-img" id="" style={{ backgroundImage: `url(${avtar})` }} />
                                            <i class="fas fa-camera"></i>
                                        </Form.Group>
                                    </Form>

                                    <div className="avtar-details">
                                        <h3>John Adams</h3>
                                        <span>7255 Mission St.</span>
                                    </div>
                                </div>

                                <Nav variant="pills" className="flex-column profile-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="UpdateProfile"><i class="fas fa-users"></i>Update profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ChangePassword"><i class="fas fa-key"></i>Change password</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="FavouriteRestaurant"><i class="fas fa-heart"></i>Favourite restaurant</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="OrderHistory"><i class="fas fa-bookmark"></i>Order history</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="BookingHistory"><i class="fas fa-history"></i>Booking history</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="RewardHistory"><i class="fas fa-gift"></i>Reward history</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="LogOut"><i class="fas fa-power-off"></i>Log out</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>



                            <Col md={8} sm={12}>
                                <Tab.Content className="right-panel">
                                    <Tab.Pane eventKey="UpdateProfile">
                                        <UpdateProfile />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ChangePassword">
                                        <ChangePassword />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="FavouriteRestaurant">
                                        <FavouriteRestaurant />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="OrderHistory">
                                        <OrderHistory />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="BookingHistory">
                                        <BookingHistory />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Container>
        </section>
    );
}

export default Profile;