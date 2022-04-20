import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experiences } from "../components/Experiences";
import { Interests } from "../components/Interests";
import { Layout } from "../components/Layout";
import { Memberships } from "../components/Memberships";
import { OpenSourceContributions } from "../components/OpenSourceContributions";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";
import { siteDescription } from "../constants";
import { socials } from "../data/socials";

export default function Resume() {
  return (
    <Layout title="Joe Duncko's Resume" description={siteDescription}>
      {/* Wrapper that sets print width for whole resume */}
      <div className="print:min-w-[960px]">
        {/* TODO: move this to its own component */}
        <div className="mb-4 hidden justify-between print:flex text-sm">
          <div>
            <h1 className="text-4xl">Joe Duncko</h1>
          </div>
          <div>
            <div className="text-right">
              <a href="mailto:personal@JoeDuncko.com">personal@JoeDuncko.com</a>{" "}
              | <a href="tel:330-719-1223">(330) 719 - 1223</a> |{" "}
              <a href="https://joeduncko.com/">JoeDuncko.com</a>
            </div>
            <div className="text-right">
              {socials.map((social, i, array) => (
                <a href={social.link} key={social.name}>
                  <FontAwesomeIcon icon={social.icon} />{" "}
                  {social.printFriendlyLabel}
                  {i !== array.length - 1 && " | "}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row print:flex-row md:gap-8 print:gap-8">
          <div className="flex-1">
            <Experiences />
          </div>
          <div className="flex-1">
            <Education />
            <Memberships />
            <OpenSourceContributions />
            <Projects />
            <Interests />
            <Socials className="print:hidden" />
            <Contact className="print:hidden" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
