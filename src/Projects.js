import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Container, Row, Figure } from "react-bootstrap";
import { motion, useAnimate, useInView } from "framer-motion";

const Projects = () => {
  const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <>
      <motion.div ref={scope} transition={"spring"} animate={{ scale: 1.2 }}>
        <Container id="projectsContainer">
          <Row>
            <Row>
              <Card.Title>
                Projects
              </Card.Title>
            </Row>
            <Col>
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                  <Card.Title id="projectsCardTitle">Intellego</Card.Title>
                  <Card
                  id="projectsCard"
                  as={Link}
                  to="https://intellego.onrender.com/"
                >
                  <Figure>
                    <Figure.Image
                      width={300}
                      height={200}
                      src="assets/intellego.png"
                    ></Figure.Image>
                  </Figure>
                </Card>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                  <Card.Title id="projectsCardTitle">Everything Honey</Card.Title>
                  <Card
                  id="projectsCard"
                  as={Link}
                  to="https://github.com/ndeyoung2/Everything-Honey"
                >
                  <Figure>
                    <Figure.Image
                      width={300}
                      height={200}
                      src="assets/honey.png"
                    ></Figure.Image>
                  </Figure>
                </Card>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                  <Card.Title id="projectsCardTitle">Zen Photos</Card.Title>
                  <Card
                  id="projectsCard"
                  as={Link}
                  to="https://github.com/ndeyoung2/Zen-Photos"
                >
                  <Figure>
                    <Figure.Image
                      width={300}

                      src="assets/zen.png"
                    ></Figure.Image>
                  </Figure>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Projects;
