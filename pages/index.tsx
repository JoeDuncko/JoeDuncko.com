import { format } from "date-fns";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import DataCard from "../components/dataCard";
import Date from "../components/date";
import Layout, { description, siteTitle } from "../components/layout";
import { experiences } from "../data/experiences";
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
          <DataCard title="Experience">
            <ol>
              {experiences.map(
                ({ title, description, company, startDate, endDate }) => (
                  <li className="mb-2">
                    <h4>
                      <b>{title}</b> @<br />
                      <a href={company.link} title={`To ${company.name}`}>
                        {company.name}
                      </a>
                    </h4>
                    <span className="block">{company.location}</span>
                    <span className="block">
                      <time dateTime={startDate.toISOString()}>
                        {format(startDate, "MMMM y")}
                      </time>{" "}
                      -{" "}
                      {endDate ? (
                        <time dateTime={endDate.toISOString()}>
                          {format(endDate, "MMMM y")}
                        </time>
                      ) : (
                        "Present"
                      )}
                    </span>

                    <p>{description}</p>
                  </li>
                )
              )}
            </ol>
          </DataCard>
        </div>
        <div className="flex-1">right</div>
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
