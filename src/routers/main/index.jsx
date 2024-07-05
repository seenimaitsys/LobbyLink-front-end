import { Route, Routes, Navigate } from "react-router-dom";
import HomeLayout from "../../layout/Home";
import ContactLayout from "../../layout/Contact";
import AboutLayout from "../../layout/About";
import PrivacyPolicyLayout from "../../layout/PrivacyPolicy";
import RefundPolicyLayout from "../../layout/RefundPolicy";

// Routers Component
const Routers = () => {
  return (
    <>
      {/* Progress indicator for scroll-to-top */}
      <div id="progress">
        <span id="progress-value">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </span>
      </div>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomeLayout />} /> {/* Home page */}
        <Route path="/about" element={<AboutLayout />} /> {/* About page */}
        <Route path="/contact" element={<ContactLayout />} />{" "}
        {/* Contact page */}
        <Route path="/privacy-policy" element={<PrivacyPolicyLayout />} />{" "}
        {/* Privacy Policy page */}
        <Route path="/refund-policy" element={<RefundPolicyLayout />} />{" "}
        {/* Refund Policy page */}
        {/* Navigate to HomeLayout if route doesn't match */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default Routers;
