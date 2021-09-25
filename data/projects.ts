type Project = {
  name: string;
  link: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Evitt",
    link: "https://evitt.io/",
    description:
      "Maximizes your event attendance by utilizing your organization’s most valuable asset - your community. Built with Flask and React, hosted on Heroku.",
  },
  {
    name: "Share Securely",
    link: "https://sharesecurely.to/",
    description:
      "The one click way for your clients to securely send you passwords. Built with Flask and React, hosted on Heroku.",
  },
  {
    name: "SWBF2.events",
    link: "https://swbf2.events/",
    description:
      "A calendar of current and upcoming community events in EA Star Wars Battlefront II (2017).",
  },
];
