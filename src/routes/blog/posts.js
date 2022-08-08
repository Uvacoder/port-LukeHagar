export async function GET() {
  const allPostFiles = import.meta.glob("./*.{svc,md}", { eager: true });
  console.log(allPostFiles);
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    console.log(path);
    console.log(post);
    const postPath = path.slice(2, -3);
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(posts);
  return { body: { posts: posts } };
}
