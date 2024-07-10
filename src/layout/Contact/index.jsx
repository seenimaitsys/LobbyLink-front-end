import { Container, Row, Col, Image } from "react-bootstrap";
import desert from "../../assets/images/contactimage.webp";
import ContactForm from "../../components/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";
// ContactLayout Component
const ContactLayout = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* Character set for the document */}
          <meta charSet={`utf-8`} />

          {/* Title of the contact page */}
          <title>LobbyLink-Contact</title>

          {/* Description for SEO */}
          <meta
            name={`description`}
            content={`Streamline check-ins and enhance security with LobbyLink. Our user-friendly platform offers efficient visitor registration, badge printing, and comprehensive reporting for a seamless visitor experience.`}
          />

          {/* Canonical URL for SEO */}
          <link rel={`canonical`} href={`https://www.lobbylink.ai/contact`} />

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
          <meta
            property={`og:url`}
            content={`https://www.lobbylink.ai/contact`}
          />
          <meta property={`og:image:alt`} content={`LobbyLink-Contact`} />
          <meta property={`og:site_name`} content={`LobbyLink-Contact`} />

          {/* Twitter Card metadata for social media sharing */}
          <meta name={`twitter:card`} content={`summary_large_image`} />
          <meta name={`twitter:title`} content={`LobbyLink-Contact`} />
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
          "url": "https://www.lobbylink.ai/contact",
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

      {/* Main container with background color and top margin */}
      <Container fluid className={`bg-blue-100 mt-130`}>
        {/* Row to organize the content */}
        <Row className={`d-flex align-items-center justify-content-center`}>
          {/* Column for the image (visible on small screens) */}
          <Col className={`mt-5 d-block d-xl-none`} xs={11}>
            <Image
              src={desert}
              alt={`desert`}
              width={"100%"}
              height={"400px"}
            ></Image>
          </Col>
          {/* Column for the contact form (visible on small screens) */}
          <Col md={9} className={`mt-5 d-block d-xl-none`}>
            <ContactForm />
          </Col>
          {/* Column for the contact form (visible on large screens) */}
          <Col xl={5} className={`d-none d-xl-block z-2 mt-8 ms-n40`}>
            <ContactForm />
          </Col>
          {/* Column for the image (visible on large screens) */}
          <Col
            xl={7}
            className={`d-none d-xl-block position-absolute z-1 mt-n8 ms-20`}
          >
            <Image
              src={desert}
              alt={`desert`}
              width={"100%"}
              height={"600px"}
              className={`p-5`}
            ></Image>
          </Col>
        </Row>
        {/* Horizontal rule for separation */}
        <Col className={`hr mt-5 bg-white w-100 h-4`}></Col>
      </Container>
    </>
  );
};

export default ContactLayout;
