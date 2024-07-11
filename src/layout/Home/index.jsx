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
          <Col xl={6} className={`p-3`}>
            <div className={`row`}>
              <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />

                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />

                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </div>

              <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />

                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
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
