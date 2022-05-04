import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Date } from "components/Date";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { siteDescription, siteTitle } from "../constants";
import { socials } from "../data/socials";
import { getAllPosts } from "../lib/api";
import { Post } from "../types/post";

type Props = {
  allPosts: Post[];
};

export default function Home({ allPosts }: Props) {
  return (
    <Layout title={siteTitle} description={siteDescription}>
      <div className="flex flex-col flex-grow">
        <section className="flex-grow">
          <ul className="flex flex-row items-center text-center gap-8 justify-center text-4xl mb-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  title={`To Joe Duncko's ${social.name}`}
                  className="hover:text-[#00FF33]"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
            <li>
              <a
                href={"mailto:personal@JoeDuncko.com"}
                target="_blank"
                title={"Email Joe Duncko"}
                className="hover:text-[#00FF33]"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <br />

          <h2 className="mb-2 text-2xl">Blog</h2>

          <div className="flex flex-nowrap overflow-scroll gap-4">
            {allPosts.map(({ slug, date, title, excerpt }) => (
              <div
                key={slug}
                className="w-48 basis-48 flex-grow-0 flex-shrink-0 relative border-4 border-black rounded-lg p-4 hover:bg-slate-100"
              >
                <div>
                  <h3 className="text-xl">{title}</h3>

                  <small>
                    <Date dateString={date} />
                  </small>
                </div>
                <p>{excerpt}</p>
                <div className="text-right">
                  <small>
                    <Link href={`/blog/${slug}`}>
                      <a className="after:absolute after:inset-0 hover:underline">
                        Read More <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </Link>
                  </small>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "excerpt", "date", "slug"]);

  return {
    props: { allPosts },
  };
};
