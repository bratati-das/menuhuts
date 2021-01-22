import React from 'react';
import { Link } from "react-router-dom";

// components
import Banner from './Banner';
import Details from './Details';
import BusinessTab from './BusinessTab';

function Business() {
    return (
        <div>
            <Banner/>
            <Details/>
            <BusinessTab/>
        </div>
    );
}

export default Business;