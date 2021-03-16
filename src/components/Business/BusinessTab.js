import React from 'react';
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";


// components
import OnlineOrder from './TabItems/OnlineOrder';
import BusinessInfo from './TabItems/BusinessInfo';
import Photos from './TabItems/Photos';
import Review from './TabItems/Review';
import Offers from './TabItems/Offers';
import Booking from './TabItems/Booking';



function BusinessTab() {

    return (
        <Tabs className="business-tab" defaultActiveKey="onlineOrder" id="">
            <Tab eventKey="onlineOrder" title="Online Order">
                <OnlineOrder />
            </Tab>
            <Tab eventKey="businessInfo" title="Business Info">
                <BusinessInfo />
            </Tab>
            <Tab eventKey="photos" title="Photos">
                <Photos />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <Review />
            </Tab>
            <Tab eventKey="offers" title="Offers">
                <Offers />
            </Tab>
            <Tab eventKey="booking" title="Booking">
                <Booking />
            </Tab>
        </Tabs>
    );
}

export default BusinessTab;