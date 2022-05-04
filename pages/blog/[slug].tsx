import { Date } from "components/Date";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Layout } from "../../components/Layout";
import markdownStyles from "./markdown-styles.module.css";


export default function Post({ post }) {
  // IDK why this is here, it was in the example
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  const MDXComponent = useMDXComponent(post.body.code);

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
        <div className={markdownStyles["markdown"]}><MDXComponent />></div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}
