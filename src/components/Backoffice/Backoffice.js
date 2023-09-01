import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fueds from './Fueds';
import Indies from './Indies';
import Titles from './Titles';

const Backoffice = () => {
  return (
    <Container className="content debug-border" style={{ marginTop: "10px",}}>
      <Row className="justify-content-center">
          <Col md={10} className="text-center text-md-right">
              <h2>Back Office</h2>
          </Col>
      </Row>
      <Row className="justify-content-center">
          <Col md={10} className="text-center text-md-right">
              {/* Email-ID: */}
              <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Home">
                  Welcome to your Back Office.
                </Tab>
                <Tab eventKey="fueds" title="Fueds">
                  <Fueds/>
                </Tab>
                <Tab eventKey="indies" title="Indies">
                  <Indies/>
                </Tab>
                <Tab eventKey="titles" title="Titles">
                  <Titles/>
                </Tab>
              </Tabs>

          </Col>
      </Row>
    </Container>
  );
};

export default Backoffice;
