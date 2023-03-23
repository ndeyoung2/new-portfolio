import React, {useRef} from "react";
import { motion, useInView} from "framer-motion";
import { Card } from "react-bootstrap";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Landing = () => {

  const container = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section id="landing">
      <motion.div
      ref={container}
      transition={"spring"}
      animate={{ scale: 1.2 }}
      >
      ref={ref}
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
