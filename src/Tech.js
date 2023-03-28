import React, { useRef, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { motion, useAnimate, useInView } from "framer-motion";

const Tech = () => {
  const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  const tech = [
    "JavaScript",
    "Node",
    "React",
    "Redux",
    "React Native",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Chart.js",
    "Formik",
    "Framer-Motion",
    "Socket.io"
  ]

  return (
    <>
    <motion.div ref={scope} transition={"spring"} animate={{ scale: 1.2 }}>
      <Card>
        <Card.Header as="h5">Tools and Tech Stack</Card.Header>
        <Card.Body>
          Trained in object-oriented programming, I work primarily in JavaScript
          with the PERN stack, but am always looking to expand my skills.
          Currently, I am learning Typescript, Next.js, and I have some
          familiarity with Docker as well.
          <br></br>
          <Card.Text>{tech.map(item =>
          <Button variant="light" key={item.name}>{item}</Button>
          )}
          </Card.Text>
        </Card.Body>
      </Card>
      </motion.div>
    </>
  );
};

export default Tech;
