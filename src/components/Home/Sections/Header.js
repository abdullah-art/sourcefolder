import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "../../../assets/favicon.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="nav-bar">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand href="#">
            <img src={logo} alt="" width="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Features"
                id="collasible-nav-dropdown"
                className="p-2"
              >
                <NavDropdown.Item as={NavLink} to="/sentimentanalysis">
                  Sentiment Analysis
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/conversationcluster">
                  Conversation Cluster
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/analytics">
                  Analytics
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Resources"
                id="collasible-nav-dropdown"
                className="p-2"
              >
                <NavDropdown.Item as={NavLink} to="/blogs">
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/reports">
                  Reports
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/pricing" className="p-3">
                Pricing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/aboutus" className="p-3">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="p-3">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login" className="p-2">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup" className="p-2">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
