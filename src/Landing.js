import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { Container, Image } from "react-bootstrap";

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
          <h1 margin={3}>
            Natalie DeYoung Ricci
            <p></p>
            Full Stack Software Engineer
          </h1>
          <Image
          className="hero"
          src="/assets/hero.png"
          width={150}
          height={150}
          alt="hero"
          margin="5"
          >
          </Image>
          </Container>

      </motion.div>
    </section>
  );
};
export default Landing;
