import React, {useState} from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Card } from "react-bootstrap";


const Landing = () => {

  return (
    <section id="landing">
      <motion.div
        layoutScroll
        initial="hidden"
        animate={{ transform: "translateX(100px)", }}
        layout transition={{ duration: 0.5 }}
      >
        <Card>
            <Card.Title variant="h2" align="center" margin={3}>
              Natalie DeYoung Ricci
            </Card.Title>
            <Card.Title variant="h5" align="center" margin={3}>
              Full Stack Software Engineer
            </Card.Title>
          {/* </Grid> */}
        </Card>
      </motion.div>
    </section>
  );
};
export default Landing;
