import Features from "../../components/Features";
import OurPriority from "../../components/OurPriority";
import ProductBooking from "../../components/ProductBooking";
import FAQ from "../../components/FAQ";
import AiReceptionist from "../../components/AIReceptionist";
import { Helmet, HelmetProvider } from "react-helmet-async";
const HomeLayout = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* Character set for the document */}
          <meta charSet={`utf-8`} />

          {/* Title of the page */}
          <title>LobbyLink</title>

          {/* Description for SEO */}
          <meta
            name={`description`}
            content={`Streamline check-ins and enhance security with LobbyLink. Our user-friendly platform offers efficient visitor registration, badge printing, and comprehensive reporting for a seamless visitor experience.`}
          />

          {/* Canonical URL for SEO */}
          <link rel={`canonical`} href={`https://www.lobbylink.ai/`} />

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
          <meta property={`og:url`} content={`https://www.lobbylink.ai/`} />
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
          "url": "https://www.lobbylink.ai/",
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
      <section>
        <AiReceptionist />
      </section>
      <section>
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
