import { ReactNode } from "react";
import { ExternalLink } from "../components/ExternalLink";

export type Interest = {
  name: string;
  description: ReactNode;
};

export const interests: Interest[] = [
  // TODO: include community organizing? Maybe instead of Bitcoin?
  {
    name: "Bitcoin",
    description: (
      <>
        A blog post I wrote in 2011 was referenced in{" "}
        <ExternalLink
          title="View journal"
          href="http://digitalcommons.law.lsu.edu/cgi/viewcontent.cgi?article=6425&context=lalrev"
        >
          a legal journal
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink
          title="View book"
          href="https://books.google.com/books?id=GEx-BwAAQBAJ&pg=PT71&lpg=PT71&dq=joe+duncko&source=bl&ots=XW3ns3vAAE&sig=Qb3yHMtJh0hVHmCsiH6t5OzwQ6M&hl=en&sa=X&ved=0ahUKEwjSlfGg2PXRAhUs9IMKHT-2DzE4FBDoAQgkMAQ#v=onepage&q=joe%20duncko&f=false"
        >
          a book
        </ExternalLink>{" "}
        on the subject.
      </>
    ),
  },
  {
    name: "Hackathons",
    description: (
      <>
        Co-founded{" "}
        <ExternalLink title="Visit HackYSU" href="https://hackysu.com/">
          HackYSU
        </ExternalLink>
        , traveled to Yale, Georgia Tech, University of Michigan, and more.
      </>
    ),
  },
  {
    name: "Startups",
    description:
      "Former founder, pitched to raise money, interned at a startup accelerator, participated in a startup accelerator and Y Combinator's Startup School.",
  },
];
