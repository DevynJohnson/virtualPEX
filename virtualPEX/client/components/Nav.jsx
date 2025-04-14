import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthService from "../utils/auth.js";

const NavTabs = () => {
    const currentPage = useLocation().pathname;
    const user = AuthService.getProfile();

    const handleLogout = () => {
        AuthService.logout();
    };

return (
    <Navbar bg="light" data-bs-theme="light" expand="md">
        <Container>
            <Navbar.Brand>Virtual PEX</Navbar.Brand>
            <Nav variant="tabs" className="me-auto mx-auto">
                <Nav.Link as={Link} to="/" active={currentPage === "/"}>Home</Nav.Link>

                <Nav.Link as={Link} to="/colors" active={currentPage === "/colors"}>Colors</Nav.Link>

                <Nav.Link as={Link} to="/people" active={currentPage === "/people"}>People</Nav.Link>
                
                <Nav.Link as={Link} to="/food" active={currentPage === "/food"}>Food and Drinks</Nav.Link>

                <Nav.Link as={Link} to="/clothing" active={currentPage === "/clothing"}>Clothing</Nav.Link>

                <Nav.Link as={Link} to="/household" active={currentPage === "/household"}>Household Items</Nav.Link>

                <Nav.Link as={Link} to="/toys" active={currentPage === "/toys"}>Toys and Games</Nav.Link>

                {!user ? (
                    <Nav.Link as={Link} to="/login" active={currentPage === "/login"}>Login</Nav.Link>
                ) : (
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                )}
            </Nav>
        </Container>
    </Navbar>
);
};

export default NavTabs;