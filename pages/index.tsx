import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Education from "../components/education";
import Experiences from "../components/experiences";
import Interests from "../components/interests";
import Layout, { description, siteTitle } from "../components/layout";
import Memberships from "../components/memberships";
import Projects from "../components/projects";
import Socials from "../components/socials";
import { getSortedPostsData } from "../lib/posts";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex flex-col items-center">
        <p>{description}</p>
      </section>

      <div className="sm:flex">
        <div className="flex-1">
          <Experiences />
        </div>
        <div className="flex-1">
          <Education />
          <Memberships />
          <Projects />
          <Interests />
          <Socials />
        </div>
      </div>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
