import React from "react";
import { ModalFooter } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <ModalFooter id="footer" justify-content="right" style={{ position: "fixed", bottom: 0, right: 0, fontSize: 14, }}margin={1}>
        © 2023 Natalie DeYoung Ricci
      </ModalFooter>
    </>
  );
}

export default Footer;
