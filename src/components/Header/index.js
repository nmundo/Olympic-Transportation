import React from 'react'
import Link from 'gatsby-link'
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';


class Header extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    toggleMenu = () => {
        let x = document.getElementById("navMenu");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    };

    render() {
        const { anchorEl } = this.state;

        return (
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
                    className="navbar"
                    id="navMenu"
                >

                    <div className="nav_item">
                        <Link to="/">
                            <img className="logo" src={require('../../img/olympic-logo.jpg')}/>
                        </Link>
                    </div>
                    <NavItem to="/busing" name="School Busing"/>
                    <NavItem to="/stops" name="Bus Stops"/>
                    <NavItem to="/oncall" name="On-Call Services"/>
                    <NavItem to="/testimonials" name="Testimonials"/>
                    <NavItem to="/faq" name="FAQ"/>
                    <NavItem to="/work" name="Work With Us"/>
                    <div className="icon">
                        <Button
                            aria-owns={anchorEl ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            &#9776;
                        </Button>
                    </div>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/busing" name="School Busing"/>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/stops" name="Bus Stops"/>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/oncall" name="On-Call Services"/>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/testimonials" name="Testimonials"/>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/faq" name="FAQ"/>
                        </MenuItem>
                        <MenuItem onClick={this.handleClose}>
                            <NavItem to="/work" name="Work With Us"/>
                        </MenuItem>
                    </Menu>
                </nav>
            </div>
        )
    }
}

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
