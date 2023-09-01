import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Booker = () => {
  return (
    <Container className="content debug-border" style={{ marginTop: "10px",}}>
      <Row className="justify-content-center">
          <Col md={10} className="text-center text-md-right">
              <h2>Booker</h2>
              <hr></hr>
          </Col>
      </Row>
      <Row className="justify-content-center">
          <Col md={10} className="text-center text-md-right">
              Email-ID:
          </Col>
      </Row>
    </Container>
  );
};

export default Booker;
