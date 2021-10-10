import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export type Social = {
  name: string;
  link: string;
  icon: IconDefinition;
};

export const socials: Social[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/JoeDuncko",
    icon: faFacebook,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/JoeDuncko",
    icon: faTwitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/JoeDuncko",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    link: "http://linkedin.com/in/joeduncko",
    icon: faLinkedin,
  },
  // TODO: Put the rest
];
