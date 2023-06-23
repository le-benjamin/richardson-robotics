import { banner, qualityphoto, teamphoto } from "../assets/slides";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const slides = [
  {
    id: "slide-1",
    img: teamphoto
  },
  {
    id: "slide-2",
    img: qualityphoto
  },
  {
    id: "slide-3",
    img: banner
  }
]

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "supportus",
    title: "Support Us",
  }
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "We build engineers with robots.",
    name: "Stuart Rampy",
    title: "Lead Mentor",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Members",
    value: "  ",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/rhs_robotics_8874/",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100089977827882",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com/RHSRobot",
  },
  {
    id: "tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@rhsrobotics8874",
  },
];

