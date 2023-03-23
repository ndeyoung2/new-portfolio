import React from "react";
import { Card } from "react-bootstrap";
import { motion} from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        layoutScroll
        animate={{ transform: "translateX(100px)", }}
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
