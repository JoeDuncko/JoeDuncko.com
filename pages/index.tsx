import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Date from "../components/date";
import Layout from "../components/layout";
import { siteTitle } from "../constants";
import { socials } from "../data/socials";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import markdownStyles from "./blog/markdown-styles.module.css";

type Props = {
  allPosts: Post[];
};

export default function Home({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex flex-col flex-grow">
        <section className="flex-grow">
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

        <section className="mb-8">
          <br />

          <h2>Blog</h2>

          <div>
            {allPosts.map(({ slug, date, title, content }) => (
              <div key={slug}>
                <div>
                  <Link href={`/blog/${slug}`}>
                    <h3>{title}</h3>
                  </Link>
                  <small>
                    <Date dateString={date} />
                  </small>
                </div>
                <div
                  className={markdownStyles["markdown"]}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
