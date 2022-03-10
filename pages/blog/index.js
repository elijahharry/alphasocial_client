import * as wp from "@lib/wordpress";

import MainWrap from "@component/MainWrap/MainWrap";
import Feature from "@component/Feature/Feature";
import Posts from "@component/Blog/Posts/Posts";
import Titles from "@component/Blog/Titles/Titles";

const BlogPosts = ({ posts }) => {
  return (
    <MainWrap
      head={{
        title: "Blog",
        desc: "Read the latest news/thoughts from Charlie Light and his associates.",
      }}
    >
      <section
        style={{ minHeight: "inherit", backgroundColor: "rgba(0,0,0,.03)" }}
      >
        <Titles
          title="Latest Blog Posts"
          crumbs={[
            { text: "Home", href: "/" },
            { text: "Blog", href: "#posts" },
          ]}
        />
        <Posts posts={posts} />
      </section>
    </MainWrap>
  );
};

export default BlogPosts;

export async function getStaticProps() {
  const { posts } = await wp.fetchPosts();
  return { revalidate: 10, props: { posts: posts } };
}
