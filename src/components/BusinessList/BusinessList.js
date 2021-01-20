import React from 'react';
import { Link } from "react-router-dom";

// components
import Banner from './Banner';
import BreadCrumbs from './BreadCrumbs';
import Listing from './Listing';

function BusinessList() {
    return (
        <div>
            <Banner/>
            <BreadCrumbs/>
            <Listing/>
        </div>
    );
}

export default BusinessList;