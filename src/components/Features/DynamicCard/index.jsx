import image1 from "../../../assets/images/image1.jpeg";
import Image2 from "../../../assets/images/image2.jpeg";
import Image3 from "../../../assets/images/image3.jpeg";
import Image4 from "../../../assets/images/image4.jpeg";
export const DynamicCard = [
  {
    Title: `Check in and Check out`,
    Description: `The platform features an exceptionally user-friendly interface, enabling seamless check-ins and check-outs that automatically signal your arrival and departure.`,
    CardColor: `bg-blue-100`,
    image: Image2,
  },
  {
    Title: `Mobile Proficiency`,
    Description: `The system supports both iPad and QR code integration, allowing access from personal devices as well as a central terminal.`,
    CardColor: `bg-blue-200`,
    image: Image4,
  },
  {
    Title: `Reports`,
    Description: `Organized record of all activity for your company. Uses artificial Intelligence to provide cutting-edge data analytics.`,
    CardColor: `bg-blue-100`,
    ms: `ms-xl-7`,
    image: Image3,
  },
  {
    Title: `Delivery`,
    Description: `Efficiently track and monitor delivery details and timings, equipped with automatic alerts to employees upon product arrival.`,
    CardColor: `bg-blue-200`,
    ms: `ms-xl-6`,
    image: image1,
  },
];
export const DynamicCard2 = [
  {
    Title: `Cloud Based Visitor Log`,
    icon: `bi bi-cloud`,
  },
  {
    Title: <>Streamlined Check In Process</>,
    icon: `bi-star`,
  },
  { Title: `Real Time Tracking`, icon: `bi-globe2` },
  {
    Title: (
      <>
        Integration With <br />
        Other Systems
      </>
    ),
    icon: `bi-pc-display-horizontal`,
  },
  { Title: `Increased Efficiency`, icon: `bi-lightning-charge` },
];
