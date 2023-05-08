import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Stack, Container, Card } from "react-bootstrap";

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
        <Container id="hero">
        <Stack>
          <Card className="hero">
            <Card.Title className="hero-title">
              Natalie DeYoung Ricci
            </Card.Title>
            <Card.Body className="hero-body">
              Full Stack Software Engineer
            </Card.Body>
          </Card>{" "}
        </Stack>
        </Container>
      </motion.div>
    </section>
  );
};
export default Landing;
