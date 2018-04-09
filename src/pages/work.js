import React from 'react'
import Link from 'gatsby-link'

const WorkForUs = () => (
    <div
        style={{
            display: 'inline-flex',
            flexFlow: 'row wrap',
        }}
    >
        <div>
            <img src={require('../img/bus_header.jpg')}/>
        </div>
        <div className="header">
            <h1>Work With Us</h1>
        </div>
        <div
            style={{
                maxWidth: 600,
            }}
        >
            Re num intem reo, quostium duc ia num eticut auctus,
            ne inclere nemussulari cae duc fachuiu erfecem erei
            speremo rituide caediena, nihilina, consult orudensula
            atum hos la re, mentraris elinti consulus con sum pulto
            rtu etil ut vis, tis haeliis vives suleste, us la vium inum
            notesso licaut ingula vernius ciorarbis ex sena, ium eor
            licepec rena milicon detimum comnostraes aris, Catiam.
        </div>
        <div>
            <p>
                <ul>
                    <li>
                        <a href="#">CDL Application</a>
                    </li>
                    <li>
                        <a href="#">NON-CDL Application</a>
                    </li>
                    <li>
                        <a href="#">BUS AID Application</a>
                    </li>
                </ul>
            </p>
        </div>
    </div>
);

export default WorkForUs
