const wp = `${process.env.WORDPRESS_URL}graphql`;

export const fetchPosts = async () => {
  const res = await fetch(wp, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query AllPosts {
              posts {
                edges {
                  node {
                    slug
                    title(format: RENDERED)
                    featuredImage {
                      node {
                        sourceUrl(size: LARGE)
                        date
                      }
                    }
                    excerpt(format: RENDERED)
                    date
                    author {
                      node {
                        avatar {
                          url
                        }
                        firstName
                        lastName
                      }
                    }
                  }
                }
              }
            }
            `,
    }),
  });
  const json = await res.json();
  if (json?.data?.posts?.edges) {
    const posts = json.data.posts.edges.map((p) => {
      const excerpt =
        p.node.excerpt
          .replace(/<(.|\n)*?>/g, "")
          .slice(0, 150)
          .trim() + "...";

      const date = new Date(p.node.date);
      return { ...p.node, excerpt: excerpt, date: date.toLocaleDateString() };
    });
    const slugs = posts.map((p) => p.slug);
    return { posts: posts, slugs: slugs };
  } else {
    return { posts: [], slugs: [] };
  }
};

export const fetchPost = async (slug) => {
  const res = await fetch(wp, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        date
                        content
                        excerpt(format: RENDERED)
                        author {
                          node {
                            firstName
                            lastName
                            description
                            avatar {
                              url
                            }
                          }
                        }
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
              `,
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }),
  });
  const json = await res.json();
  if (json?.data?.post) {
    const { date, excerpt, title } = json.data.post;
    const dateFixed = new Date(date);
    const excerptFixed =
      excerpt
        .replace(/<(.|\n)*?>/g, "")
        .slice(0, 150)
        .trim() + "...";

    const titleTrimmed = title.slice(0, 20).trim() + "...";

    return {
      ...json.data.post,
      excerpt: excerptFixed,
      date: dateFixed.toLocaleDateString(),
      titleTrimmed: titleTrimmed,
    };
  } else {
    return null;
  }
};
