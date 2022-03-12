import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { siteTitle } from "../constants";
import { socials } from "../data/socials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <ul className="flex flex-row items-center text-center gap-8 justify-center text-4xl mb-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.link}
                target="_blank"
                title={`To Joe Duncko's ${social.name}`}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>Some blog posts go here</section>
    </Layout>
  );
}
