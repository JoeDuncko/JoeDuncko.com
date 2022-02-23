import { GetStaticProps } from "next";
import Head from "next/head";
import Contact from "../components/contact";
import Education from "../components/education";
import Experiences from "../components/experiences";
import Interests from "../components/interests";
import Layout, { siteTitle } from "../components/layout";
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

      <div className="sm:flex print:flex print:min-w-[960px]">
        <div className="flex-1 sm:mr-4">
          <Experiences />
        </div>
        <div className="flex-1 sm:ml-4">
          <Education />
          <Memberships />
          <Projects />
          <Interests />
          <Socials className="print:hidden" />
          <Contact className="print:hidden" />
        </div>
      </div>

      {/* <section>
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
      </section> */}
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
