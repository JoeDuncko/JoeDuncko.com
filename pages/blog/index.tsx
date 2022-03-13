import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { siteTitle } from "../../constants";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl mb-2">Blog</h1>

        <div>
          {allPosts.map(({ slug, date, title, excerpt }) => (
            <div key={slug}>
              <Link href={`/blog/${slug}`}>
                <h2 className="text-3xl">{title}</h2>
              </Link>
              <small>
                <Date dateString={date} />
              </small>
              <p>{excerpt}</p>
            </div>
          ))}
        </div>
      </section>
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
