import Head from "next/head";
import { useRouter } from "next/router";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();

  // IDK why this is here, it was in the example
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article className="max-w-3xl mx-auto">
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
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
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
