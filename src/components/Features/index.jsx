import { Row, Col, Container, Image } from "react-bootstrap";
import { DynamicCard, DynamicCard2 } from "./DynamicCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import checkin from "../../assets/images/checkin.png";
const Features = () => {
  return (
    <>
      <Container
        fluid
        className={`d-flex flex-column align-items-center justify-content-center`}
      >
        {/* Row for main feature description and first card */}
        <Row className={`mt-xl-6 mt-5 `}>
          <Col
            xl={12}
            className={`d-flex flex-column align-items-center justify-content-center`}
          >
            {/* Main feature heading */}

            <h2
              style={{ fontSize: "clamp(1px, 8vw, 56px)" }}
              className={`text-blue-100  text-center  fw-semibold animate__animated  animate__fadeInRight`}
            >
              LobbyLink Trusted Features
            </h2>
            <Col
              xl={9}
              className={`d-flex align-items-center justify-content-center`}
            >
              {/* Feature description */}

              <p
                className={`text-blue-100  lh-lg mt-4 text-center fs-22 animate__animated animate__fadeInLeft`}
              >
                LobbyLink is an innovative visitor management app, designed to
                streamline your guest check-ins and enhance security. Easily
                manage all the records and access the analytics with ease. Save
                time for both your receptionist and your customers.
              </p>
            </Col>
          </Col>

          {/* First DynamicCard */}
          {/* <Col
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
          </Col> */}
        </Row>
        {DynamicCard.map((value, index) => {
          return (
            <>
              <h2
                style={{ fontSize: "clamp(1px, 7vw, 56px)" }}
                className={`text-blue-100  text-center  fw-semibold mt-5 mt-xl-6`}
                key={index}
              >
                {value.Title}
              </h2>
              <Row
                className={`mt-3 d-flex ${
                  index % 2 === 0 && "flex-xs-column-reverse"
                } ${
                  index % 2 !== 0 && "flex-xl-row-reverse"
                } flex-xl-row align-items-center justify-content-center`}
              >
                <Col xl={6}>
                  <Image src={checkin} alt={`check in`} width={`100%`}></Image>
                </Col>
                <Col
                  xl={5}
                  className={`d-flex flex-column align-items-center justify-content-center mt-4 mt-xl-0`}
                >
                  <p
                    className={`text-blue-100 text-center`}
                    style={{ fontSize: "26px" }}
                  >
                    {value.Description}
                  </p>
                </Col>
              </Row>
            </>
          );
        })}
        {/* Horizontal line */}
        <Col
          xl={10}
          s
          xs={10}
          className={`hr mt-xl-8 mt-5 bg-blue-100 h-4`}
        ></Col>
        <Row
          className={`d-flex align-items-center gap-0 gap-xl-5 justify-content-center`}
        >
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
        </Row>
      </Container>
    </>
  );
};

export default Features;
