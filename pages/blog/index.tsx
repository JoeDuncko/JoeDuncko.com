import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { Date as DateComponent } from "../../components/Date";
import { Layout } from "../../components/Layout";
import { siteDescription } from "../../constants";

export default function Blog({ posts }) {
  return (
    <Layout title="Joe Duncko's Blog" description={siteDescription}>
      <section className="max-w-3xl w-full mx-auto mb-8">
        <h1 className="text-5xl mb-4">Blog</h1>

        <div className="flex flex-col gap-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function PostCard({ date, url, title, excerpt }) {
  return (
    <div className="relative border-4 border-black rounded-lg p-4 hover:bg-slate-100">
      <h2 className="text-3xl">{title}</h2>

      <small>
        <DateComponent dateString={date} />
      </small>
      <p>{excerpt}</p>
      <div className="text-right">
        <small>
          <Link href={url}>
            <a className="after:absolute after:inset-0 hover:underline">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Link>
        </small>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}
