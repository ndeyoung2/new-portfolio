import React from "react";
import { ModalFooter } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <ModalFooter id="footer" align="center" style={{ position: "fixed", bottom: 0 }}margin={1}>
        © 2023 Natalie DeYoung Ricci
      </ModalFooter>
    </>
  );
}

export default Footer;