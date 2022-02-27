export type Experience = {
  title: string;
  company: {
    name: string;
    location: string;
    link?: string;
  };
  startDate: Date;
  endDate?: Date;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: "Senior Front-End Engineer",
    company: {
      name: "BlastPoint",
      location: "Pittsburgh, PA",
      link: "https://blastpoint.com/",
    },
    startDate: new Date("2021-10-6"),
    description: "",
  },
  {
    title: "Software Engineer",
    company: {
      name: "BrdgAI",
      location: "Pittsburgh, PA",
      link: "https://brdg.ai/",
    },
    startDate: new Date("2020-1-2"), // TODO: check this date
    endDate: new Date("2021-10-6"),
    description:
      "Created UIs and designed developer-friendly APIs for machine learning pipeline. Projects included custom web-based image and video labeling software (react, canvas/konva), a cross-platform data collection mobile app (react native, Expo), and several dashboards. Helped manage a remote team of contractors located outside of the US. Heavily contributed to iterating devops workflow by spearheading implementing analytics, error reporting, and CI.",
  },
  {
    title: "Co-Founder, CEO",
    company: {
      name: "The Event Discovery Company",
      location: "Youngstown, OH",
      // link: "https://eventdiscovery.company/", // site is dead
    },
    startDate: new Date("2017-10"), // TODO: get real date
    endDate: new Date("2020-3-1"),
    description:
      "Led communication with customers and stakeholders to make product and business decisions. Spearheaded frontend development, creating interactive wireframes in Adobe XD and implementing them in React via Material UI. Worked remote with a team through an always-improving agile development workflow.",
  },
  {
    title: "Talent Development Coordinator",
    company: {
      name: "Drund",
      location: "Youngstown, OH",
      link: "https://drund.com/",
    },
    startDate: new Date("2017-8"), // TODO: get real date
    endDate: new Date("2018-9-14"),
    description:
      "Grew Drund's team and talent by coordinating internship programs, developer community outreach, and brand awareness.",
  },
  {
    title: "Frontend Engineer",
    company: {
      name: "Drund",
      location: "Youngstown, OH",
      link: "https://drund.com/",
    },
    startDate: new Date("2016-2-9"),
    endDate: new Date("2018-9-14"),
    description:
      "Maintained and added features to a white-label social-network-as-a-service. Helped modernize the project by leading the implementation of Javascript code standards via linting, integration testing, unit testing, and refactoring.",
  },
  {
    title: "Software Development Intern",
    company: {
      name: "Flashstarts",
      location: "Cleveland, OH",
      link: "http://flashstarts.com/",
    },
    startDate: new Date("2015-5-19"),
    endDate: new Date("2015-8-19"),
    description:
      "Spent three months helping ten-odd startups get their MVPs ready in time for Demo Day in Flashstarts' intensive program. Learned a ton about sales and entrepreneurship along the way. Worked simultaneously on multiple projects with multiple teams. Worked with the MEAN stack on one project, and Phaser.js using Typescript on another. Discovered the wonderful thing that is UX testing.",
  },
  {
    title: "Student Web Developer",
    company: {
      name: "Youngstown State University",
      location: "Youngstown, OH",
      link: "https://ysu.edu/",
    },
    startDate: new Date("2013-9"), // TODO: get real date
    endDate: new Date("2015-2"), // TODO: get real date
    description:
      "Created an information organization system for the Youngstown State University's Undergraduate web Bulletin. This involved writing custom Drupal plugins and themes in PHP.",
  },
  {
    title: "Joe",
    company: {
      name: "Joe's PC Services",
      location: "Canfield, OH",
    },
    startDate: new Date("2010"),
    endDate: new Date("2015"),
    description:
      "Branded, marketed, and carried out computer maintenance, phone repair, and website administration and creation services to over 100 unique customers while in high school.",
  },
];
