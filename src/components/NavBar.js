import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavBar.scss';

const NavBar = () => {
    return (
        // <Navbar bg="light" expand="lg" sticky="top">
        //     <Navbar.Brand className="brand">GrapPreciate</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link as={Link} to="/" >Dashboard</Nav.Link>
        //             <Nav.Link as={Link} to="/profile" >Profile</Nav.Link>
        //         </Nav>
        //         <Form inline>
        //             <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        //             <Button variant="outline-success">Search</Button>
        //         </Form>
        //     </Navbar.Collapse>
        // </Navbar>
        <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
          <Link class="sidebar-heading" to="/">GrabPreciate</Link>
          <div class="list-group list-group-flush">
            <Link class="list-group-item list-group-item-action bg-light" to="/profile">Profile</Link>
            <Link class="list-group-item list-group-item-action bg-light" to="/nominate">Nominate</Link>
            <Link class="list-group-item list-group-item-action bg-light" to="/">Leaderboard</Link>
          </div>
        </div>
        </div>
    );
};

export default NavBar;
