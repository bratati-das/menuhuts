import React from 'react';
import { Link } from "react-router-dom";

// components
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
import Banner from './Banner';
import NearResturant from './NearResturant';
import GetApp from './GetApp';
import Cities from './Cities';
import OurRegistration from './OurRegistration';
import Stats from './Stats';


function Home() {
    return (
        <>
            <Banner />
            <NearResturant />
            <GetApp />
            <Cities />
            <OurRegistration />
            <Stats />
        </>
    );
}

export default Home;