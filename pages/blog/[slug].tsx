import { Date } from "../../components/Date";
import { Layout } from "../../components/Layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post as PostType } from "../../types/post";
import markdownStyles from "./markdown-styles.module.css";

export default function Post({ post }: { post: PostType }) {
  // IDK why this is here, it was in the example
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout
      title={`${post.title} | Joe Duncko's Blog`}
      description={post.excerpt}
    >
      <article className="max-w-3xl w-full mx-auto">
        <div className="mb-2">
          <h1 className="text-5xl">{post.title}</h1>
          <Date dateString={post.date} />
        </div>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
