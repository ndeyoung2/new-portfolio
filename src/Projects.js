import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Container, Row, Figure } from "react-bootstrap";
import { motion, useAnimate, useInView } from "framer-motion";

const Projects = () => {

  const [scope, animate] = useAnimate();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <>
      <motion.div
      whileHover={{ scale: 1.1 }}
      ref={scope}
      transition={"spring"}
      >
        <Container>
          <Row>
            <Row >Projects</Row>
            <Col>
              Intellego
              <motion.div
                   transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10}}>
              <Card as={Link} to="https://intellego.onrender.com/">
                <Figure>
                  <Figure.Image
                    width={300}
                    height={200}
                    alt="300x200"
                    src="assets/intellego.png"
                  ></Figure.Image>
                </Figure>
              </Card>
              </motion.div>
            </Col>
            <Col>
              Everything Honey
              <motion.div
                   transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10}}>
              <Card
                as={Link}
                to="https://github.com/ndeyoung2/Everything-Honey"
              >
                <Figure>
                  <Figure.Image
                    width={300}
                    height={200}
                    alt="300x200"
                    src="assets/honey.png"
                  ></Figure.Image>
                </Figure>
              </Card>
              </motion.div>
            </Col>
            <Col>
              Zen Photos
              <motion.div
                   transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10}}
              >
              <Card as={Link} to="https://github.com/ndeyoung2/Zen-Photos">
                <Figure>
                  <Figure.Image
                    width={300}
                    height={200}
                    alt="300x200"
                    src="assets/zen.jpg"
                  ></Figure.Image>
                </Figure>
              </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Projects;
