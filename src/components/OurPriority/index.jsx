import { Container, Row, Col, Card } from "react-bootstrap";
import { DynamicCard } from "./DynamicCard";

const OurPriority = () => {
  return (
    // Container for the entire section with margin-top, padding-bottom, and background color
    <Container fluid className={`mt-6 pb-6 bg-orange-100`}>
      {/* Row to contain the title and cards, with center alignment and gap */}
      <Row className={`d-flex align-items-center justify-content-center gap-5`}>
        {/* Title of the section */}
        <h1
          style={{ fontSize: "clamp(10px, 9vw, 54px)" }}
          className="pt-5 ps-5 text-center text-xl-start text-blue-100"
        >
          Your Safety Is Our Priority
        </h1>
        {/* Mapping through the DynamicCard array to create each card */}
        {DynamicCard.map((value, index) => {
          return (
            <Col
              xl={2}
              sm={4}
              xs={9}
              className={`d-flex align-items-center justify-content-center`}
              key={index}
            >
              {/* Card with dynamic background color and fixed height */}
              <Card
                className={`p-3 w-90 rounded-30 ${
                  index % 2 == 0 ? "bg-blue-100" : "bg-white"
                } h-200`}
              >
                {/* Card header with dynamic text color and fixed font size */}
                <h5
                  className={`${
                    index % 2 == 0 ? "text-white" : "text-blue-100"
                  } pb-2 fs-38 fw-bold`}
                >
                  {`0${index + 1}.`}
                </h5>
                {/* Card description with dynamic text color */}
                <p
                  className={`${
                    index % 2 == 0 ? "text-white" : "text-blue-100"
                  } pb-3 fs-18`}
                >
                  {value.Desc}
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurPriority;
