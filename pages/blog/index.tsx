import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { Date } from "../../components/Date";
import { Layout } from "../../components/Layout";
import { siteTitle } from "../../constants";
import { getAllPosts } from "../../lib/api";
import { Post } from "../../types/post";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="max-w-3xl w-full mx-auto">
        <h1 className="text-5xl mb-4">Blog</h1>

        <div>
          {allPosts.map(({ slug, date, title, excerpt }) => (
            <div
              key={slug}
              className="relative border-4 border-black rounded-lg p-4 hover:bg-slate-100"
            >
              <h2 className="text-3xl">{title}</h2>

              <small>
                <Date dateString={date} />
              </small>
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
