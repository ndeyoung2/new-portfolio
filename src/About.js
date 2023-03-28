import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const leftSlide = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    hidden: { opacity: 0, scale: 1, x: -200 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <section id="about">
        <motion.div
          ref={ref}
          variants={leftSlide}
          animate={control}
          initial="hidden"
        >
          <Card>
            <Card.Title>About</Card.Title>
            <Card.Body>
              Natalie DeYoung Ricci is a software developer working and coding
              in Los Angeles.
            </Card.Body>
          </Card>
        </motion.div>
      </section>
    </>
  );
};

export default About;
