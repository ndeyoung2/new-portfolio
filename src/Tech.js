import React, { useRef, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
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
    "Framer-Motion",
  ];

  return (
    <>
      <motion.div ref={scope} transition={"spring"} animate={{ scale: 1.1 }}>
        <Container>
          <Row>
            <Col>
          <Card id="techCard">
            <Card.Title id="tech">Tools and Tech Stack</Card.Title>
            <Card.Body justify-content="center">
              Trained in object-oriented programming, I work primarily in
              JavaScript with the PERN stack, but am always looking to expand my
              skills.
              <Card.Text>
                {tech.map((item) => (
                  <Button className="button" key={item}>
                    {item}
                  </Button>
                ))}
              </Card.Text>
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
