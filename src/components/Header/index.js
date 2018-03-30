import React from 'react'
import Link from 'gatsby-link'


const Header = () => (
    <div
        style={{
            borderBottom: '10px solid #2b3087',
            height: 100
        }}
    >
        <nav
            style={{
                margin: '0 auto',
                maxWidth: 960,
                height: '100%',
                display: 'flex',
            }}
        >
            <div>
                <Link to="/">
                    <img className="logo" src={require('../../img/olympic-logo.jpg')}/>
                </Link>
            </div>
            <div className="navbar">
                <NavItem to="/busing" name="School Busing"/>
                <NavItem to="/stops" name="Bus Stops"/>
                <NavItem to="/oncall" name="On-Call Services"/>
                <NavItem to="/testimonials" name="Testimonials"/>
                <NavItem to="/faq" name="FAQ"/>
                <NavItem to="/work" name="Work With Us"/>
            </div>
        </nav>
    </div>
);

class NavItem extends React.Component {
    render() {
        return (
            <div className="nav_item">
                <Link to={this.props.to}>{this.props.name}</Link>
            </div>
        )
    }
}

export default Header
