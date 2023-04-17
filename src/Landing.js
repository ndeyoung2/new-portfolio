import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Stack, Row, Col, Card } from "react-bootstrap";

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
      </motion.div>
    </section>
  );
};
export default Landing;
