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
    name: "James",
    content: `"Revve has made sending money abroad so easy! With just a few taps on their app, I can send money securely to my family back home. It's fast, convenient, and reliable. I couldn't ask for more!”`,
    role: "Business Owner",
    location: {
      name: "Lagos",
      flag: "ng.svg",
    },
  },
  // {
  //   imgUrl: "testimonial-3.png",
  //   name: "Grace Faleti",
  //   content: `“Would confidently recommend this application to anyone looking for a seamless payment and transfer”`,
  //   role: "Student",
  // },
  {
    imgUrl: "testimonial-2.png",
    name: "Sarah",
    content: `“I love how simple Revve is to use. I always use the app when shopping online or making payments when I travel.”`,
    role: "Entrepreneur",
    location: {
      name: "Ottawa",
      flag: "ca.svg",
    },
  },
  {
    imgUrl: "testimonial-3.png",
    name: "Grace",
    content: `“The instant money transfer feature has saves me time and money. Highly recommend!”`,
    role: "Student",
    location: {
      name: "Chicago",
      flag: "usa.svg",
    },
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
    content: `No, Revve is not a bank. We are a fintech company that specializes in providing innovative solutions for cross-border transactions and financial connectivity. While we offer services that may resemble those of a bank, such as remittance,  bill payments, and online shopping, we operate as a platform designed to facilitate these transactions seamlessly and securely, transcending the traditional banking model`,
  },
  {
    title: "Where is Revve available",
    content: `Revve's services are currently available in Nigeria, the United Kingdom, Canada, and the United States of America. We are continually expanding to serve more regions and provide seamless financial solutions to customers globally.`,
  },
  {
    title: "How does Revve work?",
    content: `Revve simplifies financial transactions with its intuitive mobile app. Users can easily send money across borders, pay bills instantly, and shop online without hassle. Our platform prioritizes security, trust, and innovation to ensure seamless experiences for individuals and businesses alike. Whether you're sending love to your family or expanding your business globally, Revve is your reliable partner in navigating the world of finance.`,
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

export const features = [
  {
    title: "Send and Receive Money ",
    content:
      "Seamlessly bridge distances with our effortless remittance service. Send love, support, and financial care to your loved ones back home. Your money, your way, delivered swiftly and securely across borders.",
    link: "",
    images: [],
  },
  {
    title: "Buy and Sell Currency",
    content:
      "Unlock Currency Freedom: Swap foreign currencies for Naira in a secure and trusted way! Your trusted partner for seamless and secure currency exchanges in Nigeria",
    link: "",
    images: [],
  },
  {
    title: "Multi- Currency Wallets",
    content:
      "Unlock Currency Freedom: Swap foreign currencies for Naira in a secure and trusted way! Your trusted partner for seamless and secure currency exchanges in Nigeria",
    link: "",
    images: [],
  },
  {
    title: "Pay Bills",
    content: `Say goodbye to long queues and endless processes—our platform offers a seamless solution for paying bills instantly without any hiccups.`,
    link: "",
    images: [],
  },
  {
    title: "Shop Online",
    content: `Experience the world at your fingertips with our seamless online shopping platform. From the latest fashion trends to must-have gadgets, shop the world's best brands and products from the comfort of your own home.`,
    link: "",
    images: [],
  },
];

export const about = {
  intro: `Welcome to Revve, where we break down borders to redefine global transactions. Our unwavering dedication ensures that cross-border transactions are as effortless as those conducted locally. We pride ourselves on a journey fueled by innovation, collaboration, and empowerment, paving the way for a seamless financial future.`,
  mission: `At Revve, our mission is to empower individuals and businesses by providing seamless financial solutions that transcend borders. We strive to simplify the complexities of  remittance, bill payments, and online shopping, making financial transactions effortless and accessible to everyone.`,
  shortIntro: `Established with a passion for innovation and a vision for seamless cross-border transactions, Revve is your trusted partner in navigating the world of finance. Our commitment to security, trust, and innovation empowers individuals and businesses alike.`,
  story:
    "Established in 2024, Revve was born out of a idea that prioritises innovation for cross-border financial transactions. Our top priorities are security, trust, and innovation to empower individuals and businesses with seamless financial solutions.",
  vision: `Our vision is a world unburdened by the frail barriers of geographical boundaries, where international distances do not stop the formation of transactional relationships. We envision a future where cross-border payments are as effortless and seamless as local transactions.`,
};

export const cta = {
  title: "Download  Revve App For Free Now",
  content: "Enjoy seamless cross-border payments today!",
};

export const contact = {
  title: "",
  content: `Do you have any questions or feedback? We'd love to hear from you.`,
  email: "",
  phone: "",
  socails: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
};
