import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Container, Row, Figure } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <Container>
        <Row>
          <Row>Projects</Row>
          <Col>
            Intellego
            <Card as={Link} to="https://intellego.onrender.com/">
              <Figure>
                <Figure.Image
                  width={300}
                  height={200}
                  alt="300x200"
                  src="assets/intellego.png"
                ></Figure.Image>
              </Figure>
            </Card>
          </Col>
          <Col>
            Everything Honey
            <Card as={Link} to="https://github.com/ndeyoung2/Everything-Honey">
            <Figure>
                <Figure.Image
                  width={300}
                  height={200}
                  alt="300x200"
                  src="assets/honey.png"
                ></Figure.Image>
              </Figure>
            </Card>
          </Col>
          <Col>
            Zen Photos
            <Card as={Link} to="https://github.com/ndeyoung2/Zen-Photos">
            <Figure>
                <Figure.Image
                  width={300}
                  height={200}
                  alt="300x200"
                  src="assets/zen.jpg"
                ></Figure.Image>
              </Figure>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
