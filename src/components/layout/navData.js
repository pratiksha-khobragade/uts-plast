import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const topBarSocials = [
  { id: 1, icon: faFacebookF, url: "#", label: "Facebook" },
  { id: 2, icon: faInstagram, url: "#", label: "Instagram" },
  { id: 3, icon: faLinkedinIn, url: "#", label: "LinkedIn" },
];

export const topBarContact = {
  email: "sales@universaltrade.in",
  emailIcon: faEnvelope,
  phone: "+91 8460565550",
  phoneIcon: faPhone,
};

export const navLinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about" },
  { id: 3, label: "Products", url: "/products" },
  { id: 4, label: "Services", url: "/services" },
  { id: 5, label: "Contact Us", url: "/contact" },
];