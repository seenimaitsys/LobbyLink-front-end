import { Container, Row, Col } from "react-bootstrap";
import Features from "../../components/Features";
import OurPriority from "../../components/OurPriority";
import ProductBooking from "../../components/ProductBooking";
import FAQ from "../../components/FAQ";

const HomeLayout = () => {
  return (
    <>
      <Container fluid className={`mt-130 bg-blue-100`}>
        <Row>
          <Col xl={6}>
            <h1
              className={`p-3 p-xl-5 text-center text-xl-start text-yellow-100 animate__animated animate__fadeIn animate__delay-0.4s`}
              style={{ fontSize: "clamp(10px, 10vw, 75px)" }}
            >
              Easy going way to welcome visitors
            </h1>
            <Col xl={7} md={12}>
              <p
                className={`p-0 ps-xl-3 lh-lg  ps-xl-5 text-center text-xl-start text-yellow-100 animate__animated animate__fadeIn animate__delay-0.6s`}
                style={{ fontSize: "clamp(5px, 5vw, 22px)" }}
              >
                Allows the front desk person to do their tasks. Reduce contact
                and risk of illness. Businesses can track when they have
                customers
              </p>
            </Col>
          </Col>
        </Row>
      </Container>

      <section className="mt-5">
        <Features />
      </section>
      <section>
        <OurPriority />
      </section>
      <section>
        <ProductBooking />
      </section>
      <section id={`faq`}>
        <FAQ />
      </section>
    </>
  );
};

export default HomeLayout;
