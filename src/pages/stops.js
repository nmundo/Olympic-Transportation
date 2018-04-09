import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Stops = () => (
    <div
        style={{
            display: 'flex',
            flexFlow: 'row wrap',
        }}
    >
        <Helmet>
            <script src="static/load_maps.js"></script>
        </Helmet>
        <div>
            <img src={require('../img/bus_header.jpg')}/>
        </div>
        <div className="header">
            <h1>Bus Stops</h1>
        </div>
        <div>
            <div>
                <ul>
                    <li>Bradford Preparatory School</li>
                    <li>Corvian Community School</li>
                    <li>Iredell Charter Academy</li>
                    <li>Lake Norman Charter</li>
                    <li>Langtree Charter Academy</li>
                    <li>Pine Lake Preparatory</li>
                </ul>
            </div>
            <div
                style={{
                    flexGrow: 1,
                }}
            >
                <div id="map_of_stops"></div>
            </div>
        </div>
    </div>
);

export default Stops
