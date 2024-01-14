import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Date as DateComponent } from "components/Date";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { siteDescription, siteTitle } from "../constants";
import { socials } from "../data/socials";

export default function Home({ posts }: { posts: Post[] }) {
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
                  className="hover:text-[#ff9300]"
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
                className="hover:text-[#ff9300]"
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
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

const PostCard = ({ date, url, title, excerpt }) => {
  return (
    <div className="w-48 basis-48 flex-grow-0 flex-shrink-0 relative content-between border-4 border-black rounded-lg p-4 hover:bg-slate-100 flex flex-col justify-between">
      <div>
        <h3 className="text-xl">{title}</h3>

        <small>
          <DateComponent dateString={date} />
        </small>

        <p>{excerpt}</p>
      </div>

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
};

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { posts } };
}
