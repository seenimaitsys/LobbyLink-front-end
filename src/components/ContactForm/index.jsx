import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ContactFormInput } from "./DynamicForm";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    // Check form validity
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid>
      {/* Main form container with padding and validation */}
      <Form
        className={`bg-white p-4 p-xl-5`}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {/* Form header */}
        <h2
          style={{ fontSize: "clamp(10px, 8vw, 50px)" }}
          className={`pb-3 text-center text-xl-start animate__animated animate__fadeIn animate__delay-0.4s`}
        >
          Lets Get Started!
        </h2>

        <Row>
          {/* Iterate over ContactFormInput to dynamically render form fields */}
          {ContactFormInput.map((value, index) => (
            <Col className={`pb-3`} xl={value.xl} md={value.md} key={index}>
              <Form.Group>
                <Form.Label htmlFor={value.name}>{value.title}</Form.Label>
                <Form.Control
                  required
                  type={value.type}
                  id={value.name}
                  name={value.name}
                  className={`border-contact-input rounded-0 `}
                />
                <Form.Control.Feedback type={`invalid`}>
                  {value.invalied}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          ))}
        </Row>

        {/* Submit button */}
        <Button
          variant={`dark`}
          className={`w-100 rounded-0 mt-3`}
          type={`submit`}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
