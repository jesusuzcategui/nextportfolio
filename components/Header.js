import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <>
            <Navbar color="dark" expand="xl" dark={true}>
                <NavbarBrand href="/">
                    Jesús Uzcategui
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about-us">
                            About us
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;