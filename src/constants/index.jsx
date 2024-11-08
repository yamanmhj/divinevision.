import { BatteryCharging, CompassIcon } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import collaboration from "../Assets/Assistancephotos/collaboration.jpg";
import compassion from "../Assets/Assistancephotos/compassion.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/Aboutus" },
  { label: "NDIS Services", href: "/Services" },

  { label: "Support in Australia", href: "/Support" },
  { label: "Career", href: "/Career" },
];

export const features = [
  {
    text: "Support Tailored to You",
    description:
      "We design care plans that match your goals and lifestyle, ensuring your independence and well-being come first.",
  },
  {
    text: "Care You Can Rely On",
    description:
      "As a registered NDIS provider, we deliver safe, compassionate, and professional support you can trust.",
  },
  {
    text: "Empowering Community",
    description:
      "Join our community-focused events and programs that encourage connections and lasting friendships.",
  },
];

export const CoreValues = [
  {
    img: compassion,
    text: "Compassion",
    description:
      "We prioritize kindness and empathy, ensuring that every individual feels understood and valued.",
  },
  {
    img: compassion,
    text: "Integrity",
    description:
      "We uphold honesty and transparency in all our actions, building trust with our clients and each other.",
  },
  {
    img: compassion,
    text: "Empowerment",
    description:
      "We empower individuals to take charge of their care, providing the resources and the support they need.",
  },
  {
    img: collaboration,
    text: "Collaboration",
    description:
      "We believe in working together as a team, fostering partnerships that enhance the care experience for our clients.",
  },
  {
    img: compassion,
    text: "Respect",
    description:
      "We honor the dignity and individuality of every person, valuing diverse perspectives and experiences.",
  },
  {
    img: compassion,
    text: "Quality",
    description:
      "We are committed to delivering high-quality services that continuously improve the well-being of those we support.",
  },
];
