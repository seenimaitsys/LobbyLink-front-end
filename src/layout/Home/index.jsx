import { Container, Row, Col } from "react-bootstrap";
import Features from "../../components/Features";
import OurPriority from "../../components/OurPriority";
import ProductBooking from "../../components/ProductBooking";
import FAQ from "../../components/FAQ";
import { Helmet, HelmetProvider } from "react-helmet-async";
const HomeLayout = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* Character set for the document */}
          <meta charSet={`utf-8`} />

          {/* Title of the website */}
          <title>LobbyLink</title>

          {/* Description for SEO */}
          <meta
            name={`description`}
            content={`Streamline check-ins and enhance security with LobbyLink. Our user-friendly platform offers efficient visitor registration, badge printing, and comprehensive reporting for a seamless visitor experience.`}
          />

          {/* Canonical URL for SEO */}
          <link rel={`canonical`} href={`https://www.lobbylink.ai`} />

          {/* Open Graph metadata for social media sharing */}
          <meta property={`og:title`} content={`LobbyLink`} />
          <meta
            property={`og:description`}
            content={`Streamline check-ins and enhance security with LobbyLink. Our user-friendly platform offers efficient visitor registration, badge printing, and comprehensive reporting for a seamless visitor experience.`}
          />
          <meta property={`og:type`} content={`website`} />
          <meta
            property={`og:image`}
            content={`/../src/assets/images/logo.png`}
          />
          <meta property={`og:url`} content={`https://www.lobbylink.ai`} />
          <meta property={`og:image:alt`} content={`LobbyLink`} />
          <meta property={`og:site_name`} content={`LobbyLink`} />

          {/* Twitter Card metadata for social media sharing */}
          <meta name={`twitter:card`} content={`summary_large_image`} />
          <meta name={`twitter:title`} content={`LobbyLink`} />
          <meta
            name={`twitter:description`}
            content={`Streamline check-ins and enhance security with LobbyLink. Our user-friendly platform offers efficient visitor registration, badge printing, and comprehensive reporting for a seamless visitor experience.`}
          />
          <meta
            name={`twitter:image`}
            content={`/../src/assets/images/logo.png`}
          />

          {/* Structured data for SEO using JSON-LD */}
          <script type={`application/ld+json`}>
            {`
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "url": "https://www.lobbylink.ai",
          "logo": "/../src/assets/images/logo.png"
        }
      `}
          </script>

          {/* Keywords for SEO */}
          <meta
            name={`keywords`}
            content={`visitor, visitor registration, free demo`}
          />
        </Helmet>
      </HelmetProvider>

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
      <section>
        <FAQ />
      </section>
    </>
  );
};

export default HomeLayout;
