import { Row, Col, Card, Container } from "react-bootstrap";
import { DynamicCard, DynamicCard2 } from "./DynamicCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Features = () => {
  return (
    <>
      <Container fluid>
        {/* Row for DynamicCard2 icons and titles */}
        <Row className={`d-flex align-items-center justify-content-center`}>
          {DynamicCard2.map((value, index) => {
            return (
              <Col
                xl={2}
                md={6}
                className={`mt-5 d-flex flex-column align-items-center `}
                key={index}
              >
                <AnimationOnScroll
                  animateIn={`animate__fadeIn animate__delay-${0.8}s`}
                  animateOnce={true}
                >
                  {/* Icon container */}
                  <div
                    className={`d-flex align-items-center justify-content-center h-6 w-6 bg-blue-100 rounded-35`}
                  >
                    <i className={`bi ${value.icon} text-yellow-100 fs-28`}></i>
                  </div>
                </AnimationOnScroll>
                {/* Title */}
                <h5 className={`text-center mt-4 h-50 fw-normal text-blue-100`}>
                  {value.Title}
                </h5>
              </Col>
            );
          })}

          {/* Horizontal line */}

          <Col
            xl={10}
            xs={10}
            className={`hr mt-xl-8 mt-5 bg-blue-100 h-4`}
          ></Col>
        </Row>

        {/* Row for main feature description and first card */}
        <Row className={`mt-xl-8 mt-5 `}>
          <Col xl={8}>
            {/* Main feature heading */}
            <AnimationOnScroll
              animateIn={`animate__fadeInLeft animate__delay-${0.8}s`}
              animateOnce={true}
            >
              <h2
                style={{ fontSize: "clamp(1px, 7vw, 56px)" }}
                className={`text-blue-100 ms-xl-13 text-center text-xl-start fw-semibold`}
              >
                LobbyLink Trusted Features
              </h2>
            </AnimationOnScroll>
            <Col xl={8} className={`ms-xl-13 `}>
              {/* Feature description */}
              <AnimationOnScroll
                animateIn={`animate__fadeInLeft animate__delay-${0.9}s`}
                animateOnce={true}
              >
                <p
                  className={`text-blue-100 lh-lg mt-4 text-center text-xl-start fs-22`}
                >
                  LobbyLink is a flexible platform tailored to facilitate
                  complex enterprises such as those in manufacturing,
                  industrial, and other security-intensive environments,
                  focusing on improving and digitizing procedures related to
                  safety, security, and compliance.
                </p>
              </AnimationOnScroll>
            </Col>
          </Col>

          {/* First DynamicCard */}
          <Col
            xl={3}
            className={`d-flex flex-column justify-content-center mt-4 mt-xl-0`}
          >
            <Card
              className={`p-4 w-100 ${DynamicCard[0].CardColor} rounded-30 h-270 z-n1`}
            >
              <AnimationOnScroll
                animateIn={`animate__fadeIn animate__delay-${0.2}s`}
                animateOnce={true}
              >
                <h5
                  className={`text-white fs-24 pb-3 fw-semibold letterSpacing-1`}
                >
                  {DynamicCard[0].Title}
                </h5>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn={`animate__fadeIn animate__delay-${0.3}s`}
                animateOnce={true}
              >
                <p className={`text-white fs-20`}>
                  {DynamicCard[0].Description}
                </p>
              </AnimationOnScroll>
            </Card>
          </Col>
        </Row>

        {/* Row for remaining DynamicCard items */}
        <Row className={`d-flex align-items-center justify-content-center`}>
          {DynamicCard.slice(1).map((value, index) => {
            return (
              <Col xl={3} lg={6} className={`mt-4 mt-xl-0`} key={index}>
                <Card
                  className={`p-4 mt-3 w-100 h-270 rounded-30 ${
                    value.CardColor
                  } ${value.ms || ""}`}
                >
                  <AnimationOnScroll
                    animateIn={`animate__fadeIn animate__delay-${0.2}s`}
                    animateOnce={true}
                  >
                    <h5
                      className={`text-white fs-24 pb-3 fw-semibold letterSpacing-1`}
                    >
                      {value.Title}
                    </h5>
                  </AnimationOnScroll>
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn={`animate__fadeIn animate__delay-${0.3}s`}
                  >
                    <p className={`text-white fs-20`}>{value.Description}</p>
                  </AnimationOnScroll>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Features;
