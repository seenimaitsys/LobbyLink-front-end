import {
  Container,
  Offcanvas,
  Navbar,
  Image,
  Col,
  Nav,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo1.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll progress element
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);

      // Display or hide the scroll progress element based on scroll position
      if (pos > 20) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      // Add click event listener to scroll progress element for smooth scrolling to top
      scrollProgress.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Update the scroll progress element's background based on scroll value
      scrollProgress.style.background = `conic-gradient(rgba(84, 168, 199, 0.7) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

      const currentScrollTop = window.pageYOffset;

      // Show or hide the navbar based on scroll direction
      if (currentScrollTop > lastScrollTop) {
        setIsNavVisible(false); // Scroll down
      } else {
        setIsNavVisible(true); // Scroll up
      }

      // Update the last scroll position, ensuring it's non-negative
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`navbar ${
          isNavVisible ? "top-0" : "top-n130"
        } position-fixed w-100  bg-orange-100 zIndex-1000`}
        style={{ height: "110px" }}
      >
        <Navbar expand={`lg`} className={`w-100`}>
          <Container fluid>
            {/* Logo and brand name */}
            <Col
              xs={8}
              xl={6}
              lg={5}
              sm={6}
              className={`d-flex  align-items-center`}
            >
              <Image src={logo} width={`70px`}></Image>
              <h2 className={`text-blue-100 fs-35 fw-bold ms-2 mt-15`}>
                <a href={`/`} className={`text-blue-100 text-decoration-none`}>
                  LobbyLink
                </a>
              </h2>
            </Col>
            {/* Navbar toggle button for smaller screens */}
            <Navbar.Toggle aria-controls={`navbarScroll`} />
            {/* Offcanvas for the responsive navbar */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm}`}
              placement={`end`}
              backdrop={true}
              className={`w-75`}
            >
              {/* Offcanvas header with brand logo */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  <Navbar.Brand
                    href={`/`}
                    className={`d-flex align-items-center`}
                  >
                    <Image src={logo} width={`70px`}></Image>
                    <h2 className={`text-blue-100 mt-15 fs-35 fw-bold ms-2`}>
                      LobbyLink
                    </h2>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* Offcanvas body with navigation links */}
              <Offcanvas.Body>
                <Nav
                  className={`d-flex justify-content-end flex-grow-1 gap-5 gap-lg-3 gap-xl-4 align-items-center me-xl-3`}
                >
                  <Nav.Link
                    href={`/about`}
                    className={`text-nowrap nav-link-hover-underline fw-normal text-blue-100 fs-22 letterSpacing-1`}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href={`/contact`}
                    className={`text-nowrap nav-link-hover-underline fw-normal text-blue-100 fs-22 letterSpacing-1`}
                  >
                    Contact Us
                  </Nav.Link>
                  {/* User profile link with image */}
                  <Nav.Link
                    className={`navmanu d-flex justify-content-center align-items-center gap-2 text-nowrap fw-semibold text-black text-nowrap font-Poppins fs-20 fst-normal `}
                    href={`/contact`}
                  >
                    <Button
                      className={`border-0  d-flex align-items-center justify-content-center gap-2 rounded-1 fs-22 bg-blue-100`}
                    >
                      App Login
                      {/* Login <i className={`bi bi-chevron-right mt-1`}></i> */}
                    </Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
