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
        <Container id="landing">
          <Col>
          <h1>
            <Row>
            Natalie DeYoung Ricci
            </Row>
            <Row>
            Full Stack Software Engineer
            </Row>
            </h1>
            </Col>
            <Col>
            <Card>
            <Image
          className="hero"
          src="/assets/hero.png"
          width={200}
          height={200}
          alt="hero"
          margin="5"
          >
          </Image>
          </Card>
</Col>

          </Container>

      </motion.div>
    </section>
  );
};
export default Landing;
