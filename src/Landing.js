import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Container, Card, Col, Row, Image } from "react-bootstrap";

const Landing = () => {
  const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <section id="landing">
      <motion.div ref={scope} transition={"spring"} animate={{ scale: 1.2 }}>
        <Container className="landing">

          <Row>
            <Col className="col">
              <Card className="hero">
                <Card.Title>Natalie DeYoung Ricci</Card.Title>
                <Card.Body className="hero">
                  Full Stack Software Engineer
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  );
};
export default Landing;
