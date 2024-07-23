import { Accordion, Container, Row, Col } from "react-bootstrap";
import { FAQList } from "./DynamicQuestion";
const FAQuestion = () => {
  return (
    <Container className={`mt-5`}>
      <h2 className={`w-100 fs-35 text-center fw-bold letterSpacing-1`}>
        Frequently Asked Questions
      </h2>
      <Row
        className={`d-flex flex-column align-items-center justify-content-center mt-5 mb-5`}
      >
        <Col xl={9}>
          <Accordion defaultActiveKey={`0`}>
            {FAQList.map((value, index) => {
              return (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <h5>{value.Question}</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className={`p-xl-2 fs-18 mt-4`}>{value.Answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQuestion;
