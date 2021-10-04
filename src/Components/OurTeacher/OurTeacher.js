import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import teacher1 from '../../Img/teacher_1.jpg'
import teacher2 from '../../Img/teacher_2.jpg'
import teacher3 from '../../Img/teacher_3.jpg'
import teacher4 from '../../Img/teacher_4.jpg'
import teacher5 from '../../Img/teacher_5.jpg'
import teacher6 from '../../Img/teacher_6.jpg'

const OurTeacher = () => {
    return (
        <div style={{minHeight: "100vh"}}>
        <h1 className="display-1 fw-bold text-center">Our <span className="text-muted">teacher</span></h1>
<Row xs={2} md={2} lg={3} className="g-4">
<Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher1} />
        <Card.Body>
          <Card.Title>Hemili Jhon</Card.Title>
          <Card.Text>
                <p>Computer Science</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher2} />
        <Card.Body>
          <Card.Title>Julia Ein</Card.Title>
          <Card.Text>
           <p>Master of Science</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher3} />
        <Card.Body>
          <Card.Title>Mr. Jhon</Card.Title>
          <Card.Text>
           <p>Master of Biology</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher4} />
        <Card.Body>
          <Card.Title>Ketrina Kein</Card.Title>
          <Card.Text>
           <p>Master of Arts</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher5} />
        <Card.Body>
          <Card.Title>Wiliam Smith</Card.Title>
          <Card.Text>
           <p>Master of Buisness Adminestration</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="h-80">
        <Card.Img style={{height: "400px", width:"426px"}} className="img-fluid" variant="top" src={teacher6} />
        <Card.Body>
          <Card.Title>Jhon Dep</Card.Title>
          <Card.Text>
           <p>Master of Mathmetic</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default OurTeacher;
