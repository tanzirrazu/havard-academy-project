import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const styles = {
    textDecoration: "none",
    color: "white",
    marginRight: '20px'
  }
  
    return (
        <>
<Navbar bg="dark"  variant="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className="text-white">Havard Academy</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "red"}}
         to="/home">Home</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "red"}} to="/about">About</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "red"}} to="/services">Services</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "red"}} to="/teacher">Our Teacher</NavLink>
      </Nav>
      <div>
        <button className="btn bg-danger text-white me-md-3">Log in</button>
        <button className="btn bg-secondary text-white">Get started</button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;