import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../../assets/images/image1.jpeg";
const AiReceptionist = () => {
  return (
    <>
      <Container fluid className={`mt-130 bg-blue-100`}>
        <Row className={`d-flex align-items-center justify-content-center`}>
          <Col xl={6} className={`p-3 ps-xl-5`}>
            <h1
              className={`p-0 text-center text-xl-start text-yellow-100 animate__animated animate__fadeIn animate__delay-0.4s`}
              style={{ fontSize: "clamp(10px, 10vw, 75px)" }}
            >
              AI Receptionist.{" "}
              <span style={{ fontSize: "clamp(10px, 10vw, 60px)" }}>
                Your Front Desk, Reimagined.
              </span>
            </h1>
          </Col>
          <Col
            xl={6}
            md={12}
            className={`d-flex align-items-end justify-content-end p-0`}
          >
            <Image src={image1} alt={""} width={`100%`}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AiReceptionist;
