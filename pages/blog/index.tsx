import Head from "next/head";
import Link from "next/link";
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

      <section>
        <h2>Blog</h2>
        <ul>
          {allPosts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              {/* <small>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
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
