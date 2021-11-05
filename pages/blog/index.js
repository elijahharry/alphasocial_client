import * as wp from "@lib/wordpress";

import MainWrap from "@component/MainWrap/MainWrap";
import Feature from "@component/Feature/Feature";
import Posts from "@component/Blog/Posts/Posts";
import Titles from "@component/Blog/Titles/Titles";

const BlogPosts = ({ posts }) => {
  console.log(posts);
  return (
    <MainWrap
      head={{
        title: "Blog",
        desc: "Read the latest news/thoughts from Charlie Light and his associates.",
      }}
    >
      <Titles
        title="Latest Blog Posts"
        crumbs={[
          { text: "Home", href: "/" },
          { text: "Blog", href: "#posts" },
        ]}
      />
      {/* <Feature
        overline="Social pioneers of finance"
        title="Latest <span>Blog Posts</span>"
        desc=""
        media={{
          background: {
            src: "socialmedia-people.jpg",
            blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAUABwMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EAB8QAAEDBAMBAAAAAAAAAAAAAAIBAwUABAYSCBMUI//EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAcEQEAAQQDAAAAAAAAAAAAAAABAwAEIjERQbH/2gAMAwEAAhEDEQA/ALtnzy5MyOSW8AzMYiyjeTSsJcOrAmfb5wuHgIU700DXQEBVI/kCq4Sqe6lKOTXUymTqlFvbQg4m+zn2v//Z",
          },
        }}
        top={true}
        dark={true}
        overlay={{ color: "primary_darker", opacity: 0.9 }}
        color="secondary-light"
        centered={true}
        desc="We've built a social media <strong>following of over 400,000</strong> in the <strong>finance space</strong>. We can do the same for your brand."
        shadow={true}
        id="home-hero"
        button1={{ link: "#about", text: "Learn more" }}
        button2={{ link: "/contact", text: "Contact" }}
      /> */}
      <Posts posts={posts} />
    </MainWrap>
  );
};

export default BlogPosts;

export async function getStaticProps() {
  const { posts } = await wp.fetchPosts();
  return { revalidate: 10, props: { posts: posts } };
}
