import type { commonCardTypes } from "../Components/types/types";

import Parcel from "../assets/drop-parcel.png";
import Client from "../assets/call-client.png";

export const featuresCard: commonCardTypes[] = [
  {
    id: 1,
    icon: Parcel,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    icon: Client,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    icon: Client,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];
