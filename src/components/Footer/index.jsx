import { Container, Row, Col } from "react-bootstrap";
import { SocialMedia, FAQ, Contact } from "./DynamicFooterDate";

const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className={`text-center text-lg-start text-muted bg-blue-100`}>
        <Container className={`text-center text-md-start bg-blue-100`}>
          {/* Footer title */}
          <h2 className={`text-white pt-4 pb-4 fw-blod fs-40`}>LobbyLink</h2>
          <Row className={`mt-3`}>
            {/* Contact section */}
            <Col md={6} sm={6} lg={6} xl={3} className={`mx-auto mb-4`}>
              <h6 className={`text-uppercase text-white fw-bold mb-4 fs-22`}>
                Become the Best
              </h6>
              {Contact.map((value, index) => {
                return (
                  <p className={`text-white`} key={index}>
                    <a
                      href={value.link}
                      className={`text-white  text-decoration-none`}
                    >
                      {value.name}
                    </a>
                  </p>
                );
              })}
            </Col>
            {/* Address section */}
            <Col md={6} lg={6} sm={6} xl={3} className={`mx-auto mb-4`}>
              <h6 className={`text-uppercase text-white fw-bold mb-4 fs-22`}>
                Address
              </h6>
              <p className={`text-white`}>
                <a
                  href={`https://maps.app.goo.gl/iCcCx72LbW1jJW3z6`}
                  className={`text-white  text-decoration-none`}
                  target="_blank"
                >
                  1 Marina Park Drive, Boston, MA 02210
                </a>
              </p>
            </Col>
            {/* Social Media section */}
            <Col md={6} lg={6} sm={6} xl={3} className={`mx-auto mb-md-0 mb-4`}>
              <h6 className={`text-uppercase fw-bold mb-4 text-white fs-22`}>
                Social Media
              </h6>
              {SocialMedia.map((value, index) => {
                return (
                  <p className={`text-white`} key={index}>
                    <a
                      href={value.link}
                      className={`text-white text-decoration-none`}
                    >
                      <i className={`bi ${value.icon} me-1`}></i> {value.name}
                    </a>
                  </p>
                );
              })}
            </Col>

            {/* FAQ section */}
            <Col md={6} lg={6} sm={6} xl={3} className={`mx-auto mb-4`}>
              <h6 className={`text-uppercase text-white fw-bold mb-4 fs-22`}>
                FAQ
              </h6>
              {FAQ.map((value, index) => {
                return (
                  <p className={`text-white`} key={index}>
                    <a
                      href={`#faq`}
                      className={`text-white text-decoration-none`}
                    >
                      {value.name}
                    </a>
                  </p>
                );
              })}
            </Col>
          </Row>
        </Container>

        {/* Footer copyright */}
        <div className={`text-center p-4 text-white bg-blue-400`}>
          © 2024 Copyright:
          <a
            className={`text-reset fw-bold ms-1`}
            href={`https://lobbylink.ai/`}
          >
            lobbylink.ai
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
