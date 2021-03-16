import React from 'react';
import { Link } from "react-router-dom";

// components
import Banner from './Banner';
import Details from './Details';


function Business() {
    return (
        <div>
            <Banner/>
            <Details/>
        </div>
    );
}

export default Business;