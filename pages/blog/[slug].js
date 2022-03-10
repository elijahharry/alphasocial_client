import MainWrap from "@component/MainWrap/MainWrap";
import Titles from "@component/Blog/Titles/Titles";
import Content from "@component/Blog/Content/Content";
import * as wp from "@lib/wordpress";

const BlogPost = ({ post }) => {
  const {
    title,
    titleTrimmed,
    excerpt,
    author,
    featuredImage,
    content,
    handle,
  } = post;
  const { firstName, lastName } = author?.node;

  console.log(author);

  return (
    <MainWrap
      head={{ title: `${title} | ${firstName} ${lastName}`, desc: excerpt }}
      key={`${handle}-wrap`}
    >
      <Titles
        img={featuredImage.node.sourceUrl}
        title={title}
        crumbs={[
          { text: "Home", href: "/" },
          { text: "Blog", href: "/blog" },
          { text: titleTrimmed, href: "#read" },
        ]}
      />
      <Content author={author?.node} content={content} handle={handle} />
    </MainWrap>
  );
};

export default BlogPost;

export async function getStaticProps({ params }) {
  const post = await wp.fetchPost(params.slug);
  if (post === null) {
    return { notFound: true };
  }
  return { revalidate: 10, props: { post: post } };
}

export async function getStaticPaths() {
  const { slugs } = await wp.fetchPosts();
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
  return { paths, fallback: "blocking" };
}
