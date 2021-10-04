import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Img from '../../Img/2.jpg'
const About = () => {
    return (
<div>
<h1 className="display-1 fw-bold text-center"><span className="text-muted">About</span> Us</h1>
<Row xs={1} md={2} className="g-4" style={{minHeight: "100vh"}}className="mt-5">
    <Col>
      <Card>
        <Card.Img className="img-fluid" variant="top" src={Img} />
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Who We Are?</Card.Title>
          <Card.Text>
           The Board of Trustees determines policy and, together with senior tate staff, sets our strategic direction The Board of Trustees determines policy and, together with senior tate staff, sets our strategic direction
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>What We Do?</Card.Title>
          <Card.Text>
           Our mission is to increase the publics enjoyment understanding of British art from the  16th century to the present day and of international modern and contemporary art  Our mission is to increase the publics enjoyment understanding of British art from the  16th century to the present day and of international modern and contemporary art
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
</div>
    );
};

export default About;