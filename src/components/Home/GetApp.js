import React, { Component } from 'react';
import { Link } from "react-router-dom";

// img
import appLogo from '../../assets/img/app-logo.png';
// import android from '../../assets/img/android.svg';
// import androidThm from '../../assets/img/android_thm.svg';
// import iPhone from '../../assets/img/apple.svg';

function GetApp() {
    return (
        <section className="get-app">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="app-cont">
                        <div className="app-left">
                            <div className="app-icon">
                                <img src={appLogo} alt="Menuhuts" />
                            </div>

                            <h1 className="container-heading">
                                Get your <span>restaurants </span> in your own pocket
                        </h1>
                        </div>

                        <div className="app-redirect">
                            <button className="outline">
                                <i className="fab fa-android"></i>
                                <span>Android</span>
                            </button>
                            <button className="outline">
                                <i className="fab fa-apple"></i>
                                <span>iPhone</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default GetApp;