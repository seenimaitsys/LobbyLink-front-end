import { Container, Row } from "react-bootstrap";
import AboutContent from "../../components/AboutContent";

// AboutLayout Component
const AboutLayout = () => {
  return (
    // Main container with top margin for spacing
    <Container className={`mt-130`} fluid>
      {/* Row to center the AboutContent component */}
      <Row className={`d-flex align-items-center justify-content-center`}>
        {/* AboutContent component which contains the main content */}
        <AboutContent />
      </Row>
    </Container>
  );
};

export default AboutLayout;
