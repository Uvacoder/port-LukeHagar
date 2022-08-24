export async function load() {
  const allPostFiles = import.meta.glob("../*/*.{svc,md}", { eager: true });
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = `/blog${path.slice(2, -9)}`;
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  //console.log(posts);
  return { posts: posts };
}
