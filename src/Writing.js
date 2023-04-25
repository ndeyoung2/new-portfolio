import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Figure } from "react-bootstrap";
import { useAnimate, motion, useInView } from "framer-motion";

const Tech = () => {
  const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { scale: 1.1, delay: 0.5 });
    }
  }, [isInView]);

  return (
    <>
      <motion.div ref={scope}>
        <Container id="writingContainer">
          <Row>
            <Row>
              <Card.Title classID="writing">Writing</Card.Title>
            </Row>
            <Row>
              <Col>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <Card.Title id="writingTitle">
                    Language Models in Machine Learning: A Brief Guide
                  </Card.Title>
                  <Card
                    id="writingCard"
                    as={Link}
                    to="https://medium.com/@ndeyoung/language-models-in-machine-learning-a-brief-guide-1fa337dd43ac"
                  >
                    <Figure>
                      <Figure.Image
                        width={300}
                        height={200}
                        src="assets/nodes.png"
                      ></Figure.Image>
                    </Figure>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Tech;
