import React from 'react';
import { Link } from "react-router-dom";



function BreadCrumbs() {
    return (
        <section className="breadcumbs">
            <div className="container-fluid">
                <div className="col-12">
                    <div className="body-top">
                        <ul>
                            <li><Link to={``}>Australia</Link></li>
                            <li><Link to={``}>Adelaide</Link></li>
                        </ul>
                        <Link to={``} className="filter"><i className="fas fa-filter"></i> Filter</Link>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreadCrumbs;