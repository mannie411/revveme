import { socialLinks } from "@app/utils/constants";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

const SocialLinks = () => {
  return (
    <div
      className="my-8 animate-slideIn-left opacity-0 "
      style={{ "--delay": 0.55 + "s" }}
    >
      <ul className="flex space-x-2 justify-center md:justify-start">
        {socialLinks.map(({ path, icon }, idx) => (
          <li key={icon}>
            <a href={`${path}`} target="_blank" rel="noopener noreferrer">
              {icon === "linkedin" && <LinkedInIcon />}
              {icon === "facebook" && <FacebookIcon />}
              {icon === "twitter" && <TwitterIcon />}
              {icon === "instagram" && <InstagramIcon />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
