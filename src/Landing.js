import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Card } from "react-bootstrap";

const Landing = () => {
  return (
    <section id="landing">
      <motion.div
        // ref={ref}
        // variants={boxVariant}
        // initial="hidden"
        // animate={control}
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
