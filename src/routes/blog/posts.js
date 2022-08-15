export async function GET() {
  const allPostFiles = import.meta.glob("./*.{svc,md}", { eager: true });
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = path.slice(2, -3);
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { body: { posts: posts } };
}
