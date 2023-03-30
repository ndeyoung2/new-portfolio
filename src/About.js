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
      transition: { duration: 0.6, delay: 0.2 },
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
            <p>Hi, I am Natalie Ricci, and I am a Full Stack Software Engineer. I live in the L.A. area with my husband, two kids, two cats, one dog, and 30,000 bees (I’m an amateur beekeeper). As a lifelong learner, I am excited to continue developing my skills as an engineer.
            </p>
            <p>
            Most recently in higher education, I was a community college English Professor and freelance writer and editor for over eight years before attending the Grace Hopper Program, which gives me a lot of experience working with people, ideas, and communication. I look forward to improving people's lives and bettering the planet through technology.
            </p>
            <p>
            Interests: reading, writing, drawing, painting, hiking, camping, baking, creating
            </p>
            </Card.Body>
          </Card>
        </motion.div>
      </section>
    </>
  );
};

export default About;
