import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Card } from "react-bootstrap";

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
        <Card>
          <Card.Title variant="h2" align="center" margin={3}>
            Natalie DeYoung Ricci
          </Card.Title>
          <Card.Title variant="h5" align="center" margin={3}>
            Full Stack Software Engineer
          </Card.Title>
        </Card>
      </motion.div>
    </section>
  );
};
export default Landing;
