import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, InputGroup, Nav, NavItem, NavLink, Dropdown, Row, Col, } from "react-bootstrap";

// components
import ProductListing from './../ProductListing';

// img
import prodImg1 from './../../../assets/img/prod-1.jpg';
import prodImg2 from './../../../assets/img/prod-2.jpg';
import prodImg3 from './../../../assets/img/prod-3.png';
import prodImg4 from './../../../assets/img/prod-4.jpg';
import prodImg5 from './../../../assets/img/prod-5.png';
import prodImg6 from './../../../assets/img/prod-6.jpg';




function OnlineOrder() {

    const [menuNav, setMenuNav] = useState("menuNav");

    const listenScrollEvent = event => {
        if (window.scrollY < 600) {
            return setMenuNav("menuNav");
        }
        else if (window.scrollY > 600) {
            return setMenuNav("menu-nav");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <>
            <div className="online-order">
                <Form>
                    <Form.Group>
                        <InputGroup className="grey">
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className="fas fa-search"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control id="" placeholder="What are you craving?" />
                        </InputGroup>
                    </Form.Group>
                </Form>

                <div className="menu-container">
                    <Nav variant="tabs" defaultActiveKey="/Snacks" className={menuNav}>
                        <Nav.Item>
                            <Nav.Link href="/Snacks">Snacks</Nav.Link>
                        </Nav.Item>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Entrée</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Entrée1</Dropdown.Item>
                                <Dropdown.Item>Entrée2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Main Courde</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Chicken</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Meat Chicken</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Soup Salad</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Vegetables</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-6">Fish Menu</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-7">Mutton</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-8">Lamb</Nav.Link>
                        </Nav.Item>

                        <Dropdown as={NavItem} className="more">
                            <Dropdown.Toggle as={NavLink}>More</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>More1</Dropdown.Item>
                                <Dropdown.Item>More2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                    <ProductListing />

                    <div className="other-description">Items marked with a green & white “V” graphic are American Vegetarian Association certified Vegetarian food items, are lacto-ovo, allowing consumption of dairy and eggs but not animal byproducts. The same frying oil may be used to prepare menu items that could contain meat. Vegetarian and meat ingredients are handled in common, and cross contact may occur, which may not be acceptable to certain types of vegetarian diets. Neither Taco Bell®, its employees, nor its franchisees nor the AVA assume any responsibility for such cross contact.</div>

                </div>

            </div>


        </>
    );
}

export default OnlineOrder;