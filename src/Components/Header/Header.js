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
<Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "skyBlue"}}
         to="/home">Home</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "skyBlue"}} to="/about">About</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "skyBlue"}} to="/services">Services</NavLink>
        <NavLink style={styles} activeStyle={{
         fontWeight: "bold",
         color: "skyBlue"}} to="/success">Success-Story</NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;