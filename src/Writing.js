import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
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
      <motion.div ref={scope} transition={"spring"} animate={{ scale: 1.1 }}>
        <Container>
          <Row>
            <Col>
              <Card
                id="writing-card"
                as={Link}
                to="https://medium.com/@ndeyoung/language-models-in-machine-learning-a-brief-guide-1fa337dd43ac"
              >
                <Card.Title>Language Models in Machine Learning: A Brief Guide</Card.Title>
                <Card.Body justify-content="center">
                  <Figure>
                    <Figure.Image
                      width={300}
                      height={200}
                      src="assets/nodes.png"
                    ></Figure.Image>
                  </Figure>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Tech;
