type Interest = {
  name: string;
  description: string;
};

export const interests: Interest[] = [
  // TODO: include community organizing? Maybe instead of Bitcoin?
  {
    name: "Bitcoin",
    description:
      "A blog post I wrote in 2011 was referenced in a legal journal and a book on the subject.",
  },
  {
    name: "Hackathons",
    description:
      "Co-founded YSU's, traveled to Yale, Georgia Tech, University of Michigan, University of Cincinnati, and more.", // TODO: add links - via JSX?
  },
  {
    name: "Startups",
    description:
      "Former founder, pitched to raise money, interned at a startup accelerator, went through a startup accelerator and Y Combinator's Startup School.",
  },
];
