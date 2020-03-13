import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/guest'> Guest</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/users'> Users</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;