import Features from "../../components/Features";
import OurPriority from "../../components/OurPriority";
import ProductBooking from "../../components/ProductBooking";
import FAQ from "../../components/FAQ";
import AiReceptionist from "../../components/AIReceptionist";

const HomeLayout = () => {
  return (
    <>
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
