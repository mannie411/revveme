import { LinkProps } from "@app/types";

export const apiURL =
  "https://oj7rchgtvms5n7p545c3thz5lu0kjzyp.lambda-url.us-east-2.on.aws";

export const storeLink = {
  appstore:
    "https://apps.apple.com/ng/app/p2vest-loan-insurance-app/id1532393698",
  playstore: "https://play.google.com/store/apps/details?id=com.p2vest",
};

export const token =
  "eyJhbGciOi637748583hdydb36bc93f.eyJpZCI6IjIyIiwidXNlcmlkIjoiMjIiLCJ2YWxpZCI6IjEiLCJuYW1lIjoibG9naW4iLCJpYXQiOjE3MDc0NjQwNDksImV4cCI6MTcwNzQ2NzY0OSwiYXVkIjoiaHR0cHM6Ly9vajdyY2hndHZtczVuN3A1NDVjM3RoejVsdTBranp5cC5sYW1iZGEtdXJsLnVzLWVhc3QtMi5vbi5hd3MiLCJpc3MiOiJodHRwczovL29qN3JjaGd0dm1zNW43cDU0NWMzdGh6NWx1MGtqenlwLmxhbWJkYS11cmwudXMtZWFzdC0yLm9uLmF3cyJ9.ncvhhUJEHSNUSS-sbjJDUISBNCV&93u72048";

export const menuLinks: LinkProps[] = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact-us", label: "Contact Us" },
];

export const subLinks: LinkProps[] = [
  { path: "/privacy-policy", label: "Privacy & Policies" },
  { path: "/terms", label: "Terms of use " },
];

export const socialLinks = [
  {
    path: "#",
    icon: "linkedin",
  },
  {
    path: "#",
    icon: "facebook",
  },
  {
    path: "#",
    icon: "twitter",
  },
  {
    path: "#",
    icon: "instagram",
  },
];

export const testimonails = [
  {
    imgUrl: "testimonial-1.png",
    name: "James Nduka",
    content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
    role: "Business Owner",
  },
  // {
  //   imgUrl: "testimonial-3.png",
  //   name: "Grace Faleti",
  //   content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
  //   role: "Student",
  // },
  {
    imgUrl: "testimonial-2.png",
    name: "Sarah Anifowoshe",
    content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
    role: "Entrepreneur",
  },
  {
    imgUrl: "testimonial-3.png",
    name: "Grace Faleti",
    content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
    role: "Student",
  },
  // {
  //   imgUrl: "testimonial-1.png",
  //   name: "James Nduka",
  //   content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
  //   role: "Business Owner",
  // },
];

export const faq = [
  {
    title: "Is Revve a bank?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet`,
  },
  {
    title: "Where is Revve available",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet`,
  },
  {
    title: "How does Revve work?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet`,
  },
];

export const values = [
  {
    imgUrl: "value-1.svg",
    title: " Innovation",
    content: `We thrive on pushing boundaries and embracing cutting-edge technologies to create solutions that redefine the cross-border transaction experience.
    `,
  },
  {
    imgUrl: "value-2.svg",
    title: "Transparency",
    content: `Trust is the foundation of our relationships. We are committed to transparency in all our operations, ensuring our users feel secure and informed.`,
  },
  {
    imgUrl: "value-3.svg",
    title: "User-Centric Approach",
    content: `Our users are at the heart of everything we do. We design our platform with the user in mind, ensuring a seamless and intuitive experience`,
  },
  {
    imgUrl: "value-4.svg",
    title: "Integrity",
    content: `We uphold the highest ethical standards in all our interactions, fostering a culture of honesty and accountability.`,
  },
];
