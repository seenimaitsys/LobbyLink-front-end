import { Container, Row, Col, Image, Button } from "react-bootstrap";

import growarrow from "../../assets/images/grow-arrow.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const ProductBooking = () => {
  return (
    <Container fluid>
      <Row
        className={`d-flex align-items-center justify-content-center pt-5 p-xl-5 bg-blue-100`}
      >
        <Col xl={8} xs={12}>
          <h2
            className={`text-white text-center text-xl-start fw-semibold`}
            style={{ fontSize: "clamp(10px, 7.6vw, 50px)" }}
          >
            <AnimationOnScroll
              animateIn={`animate__fadeInLeft animate__delay-${0.3}s`}
              animateOnce={true}
            >
              Expand visitor management throughout your entire enterprise.
            </AnimationOnScroll>
          </h2>
        </Col>
        <Col xs={6} className={`p-0 d-block d-lg-none  pt-3 pb-3`}>
          <Image src={growarrow} className={`w-100`} loading={'lazy'}></Image>
        </Col>
        <Col
          xl={8}
          className={`d-flex align-items-center justify-content-center`}
        >
          <Col xl={7} lg={12} xs={12}>
            <AnimationOnScroll
              animateIn={`animate__fadeInLeft animate__delay-${0.3}s`}
              animateOnce={true}
            >
              <p
                className={`text-white lh-lg text-center text-xl-start`}
                style={{ fontSize: "clamp(10px, 5vw, 20px)" }}
              >
                Custom deployments and a unified dashboard make tracking
                check-ins and securing your front desks simple,
                <span className={`fw-bold`}>{` whether you're managing one
              location or multiple, from any location.`}</span>
              </p>
            </AnimationOnScroll>
          </Col>
          <Col
            xl={5}
            className={`d-flex align-items-center justify-content-center `}
          >
            <Image src={growarrow} className={`p-0 d-none d-lg-block`}></Image>
          </Col>
        </Col>
      </Row>
      <Row className={`pb-6 bg-orange-100`}>
        <Col className="d-flex flex-column align-items-center justify-content-center mt-6">
          <AnimationOnScroll
            animateIn={`animate__pulse animate__delay-${0.3}s animate__infinite`}
          >
            <h2
              className={`text-blue-100 text-center fw-bold`}
              style={{ fontSize: "clamp(10px, 7.6vw, 56px)" }}
            >
              Try LobbyLink Today!
            </h2>
          </AnimationOnScroll>
          <p className={`text-blue-100 mt-4 text-center fs-18`}>
            Become one step ahead of the competition.
          </p>
          <Button
            className={`border-0 mt-3 d-flex align-items-center justify-content-center gap-2 rounded-0 ps-3 fs-18 bg-blue-100`}
          >
            <a href={`/contact`} className={`text-white  text-decoration-none`}>
              Try Here <i className={`bi bi-chevron-right mt-1`}></i>
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductBooking;
