// client/components/Nav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav as BsNav, Container } from 'react-bootstrap';
import AuthService from '../utils/auth.js';

const NavTabs = () => {
  // Get the current path for active styling
  const currentPage = useLocation().pathname;
  // Get user profile (null if not logged in)
  const user = AuthService.getProfile();

  // Function to log out the user
  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <Navbar bg="light" data-bs-theme="light" expand="md" sticky="top">
      <Container>
        <Navbar.Brand>Virtual PEX</Navbar.Brand>
        <BsNav variant="tabs" className="me-auto mx-auto">
          <BsNav.Link as={Link} to="/" active={currentPage === '/'}>
            Home
          </BsNav.Link>
          <BsNav.Link as={Link} to="/food" active={currentPage === '/food'}>
            Food and Drinks
          </BsNav.Link>
          <BsNav.Link as={Link} to="/clothing" active={currentPage === '/clothing'}>
            Clothing
          </BsNav.Link>
          <BsNav.Link as={Link} to="/household" active={currentPage === '/household'}>
            Household Items
          </BsNav.Link>
          <BsNav.Link as={Link} to="/toys" active={currentPage === '/toys'}>
            Toys and Games
          </BsNav.Link>
          <BsNav.Link as={Link} to="/colors" active={currentPage === '/colors'}>
            Colors
          </BsNav.Link>
          <BsNav.Link as={Link} to="/people" active={currentPage === '/people'}>
            People
          </BsNav.Link>
          {/* Show login if no user, otherwise show logout */}
          {!user ? (
            <BsNav.Link as={Link} to="/login" active={currentPage === '/login'}>
              Login
            </BsNav.Link>
          ) : (
            <BsNav.Link onClick={handleLogout}>Logout</BsNav.Link>
          )}
        </BsNav>
      </Container>

    </Navbar>
  );
};

export default NavTabs;
