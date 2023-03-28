import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Form, Card,  Row, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_m9913sj",
        "template_eiod499",
        {
          from_name: form.name,
          to_name: "Natalie Ricci",
          from_email: form.email,
          to_email: "ndeyoung@gmail.com",
          message: form.message,
        },
        "AKL91W-5ZEs9Cy67g"
      )
      .then(
        () => {
          setLoading(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });
          alert(
            "Thank you for reaching out! I will reply as soon as possible."
          );

        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
    <section id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        >
      <Card
      className="card"
      size='lg'
      onSubmit={handleSubmit}>
        <Card.Header>
        <Card.Title>Contact Me</Card.Title>
        </Card.Header>
        <Card.Body className="show-grid">
          <Form>
            <Form.Group>
              <Row>
                <Form.Label column sm="2">Your Name</Form.Label>
                  <Form.Control
                    name="name"
                    id="name"
                    type="text"
                    value={form.name}
                    style={{ height: "50px", width: "400px", fontFamily: "Montserrat", fontSize: "medium" }}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
              </Row>
              <Row>
                <Form.Group>
                <Form.Label column sm="2">Your Email</Form.Label>
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    value={form.email}
                    style={{ height: "50px", width: "400px", fontFamily: "Montserrat", fontSize: "medium" }}
                    placeholder="name@example.com"
                    onChange={handleChange}
                    required
                  />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                <Form.Label column sm="2">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    id="textarea"
                    value={form.message}
                    style={{ height: "200px", width: "400px", fontFamily: "Montserrat", fontSize: "medium" }}
                    placeholder="Your Message"
                    onChange={handleChange}
                    required
                  />
              </Form.Group>
              </Row>
              <Row>
              <Button id="button" className="button" type="submit">Sumbit</Button>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </motion.div>
    </section>
    </>
  );
};
export default Contact;
