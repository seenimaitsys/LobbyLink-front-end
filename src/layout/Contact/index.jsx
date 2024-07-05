import { Container, Row, Col, Image } from "react-bootstrap";
import desert from "../../assets/images/contactimage.webp";
import ContactForm from "../../components/ContactForm";

// ContactLayout Component
const ContactLayout = () => {
  return (
    <>
      {/* Main container with background color and top margin */}
      <Container fluid className={`bg-blue-100 mt-130`}>
        {/* Row to organize the content */}
        <Row className={`d-flex align-items-center justify-content-center`}>
          {/* Column for the image (visible on small screens) */}
          <Col className={`mt-5 d-block d-xl-none`} xs={11}>
            <Image
              src={desert}
              alt={`desert`}
              width={"100%"}
              height={"400px"}
            ></Image>
          </Col>
          {/* Column for the contact form (visible on small screens) */}
          <Col md={9} className={`mt-5 d-block d-xl-none`}>
            <ContactForm />
          </Col>
          {/* Column for the contact form (visible on large screens) */}
          <Col xl={5} className={`d-none d-xl-block z-2 mt-8 ms-n40`}>
            <ContactForm />
          </Col>
          {/* Column for the image (visible on large screens) */}
          <Col
            xl={7}
            className={`d-none d-xl-block position-absolute z-1 mt-n8 ms-20`}
          >
            <Image
              src={desert}
              alt={`desert`}
              width={"100%"}
              height={"600px"}
              className={`p-5`}
            ></Image>
          </Col>
        </Row>
        {/* Horizontal rule for separation */}
        <Col className={`hr mt-5 bg-white w-100 h-4`}></Col>
      </Container>
    </>
  );
};

export default ContactLayout;
