export async function load() {
  const allPostFiles = import.meta.glob("./blog/**/*.{svc,md}", {
    eager: true,
  });
  console.log(allPostFiles);
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    console.log(path);
    const postPath = `/${path.slice(2, -9)}`;
    console.log(postPath);
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  //console.log(posts);
  return { posts: posts };
}
