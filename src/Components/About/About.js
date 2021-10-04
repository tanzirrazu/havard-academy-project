import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Img from '../../Img/2.jpg'
const About = () => {
    return (
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

        // <div className="p-3">
        //  <div className="col-md-6">
        //  <div>
        //   <h1>Who We are</h1>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptatum iusto qui? Praesentium possimus, ex quos ipsam saepe odit magnam unde deleniti nisi itaque voluptates est dolorem nihil maxime esse natus distinctio tempora omnis perferendis dolor. Optio numquam voluptate iure dolorem assumenda. Rem, pariatur consequuntur suscipit provident veniam quibusdam voluptatibus.</p>
        //   </div>
        //   <div>
        //   <h1>What we do</h1>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptatum iusto qui? Praesentium possimus, ex quos ipsam saepe odit magnam unde deleniti nisi itaque voluptates est dolorem nihil maxime esse natus distinctio tempora omnis perferendis dolor. Optio numquam voluptate iure dolorem assumenda. Rem, pariatur consequuntur suscipit provident veniam quibusdam voluptatibus.</p>
        //   </div>
        //  </div>
        //  <div className="col-md-6">
        //     <img className="img-fluid" src={Img} alt="" />
        //  </div>
        // </div>
    );
};

export default About;