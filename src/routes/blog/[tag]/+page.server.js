/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let tags = [];
  const tag = params.tag;
  const allPostFiles = import.meta.glob("../*/*.{svc,md}", { eager: true });
  console.log(allPostFiles);
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = `/blog${path.slice(2, -9)}`;
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  for (const post of posts) {
    tags.push(...post.tags);
  }
  tags = Array.from(new Set([...tags]));
  tags = tags.map((Obj) => {
    return { tag: Obj.replaceAll(" ", "").toLowerCase(), displayName: Obj };
  });
  return {
    posts: posts,
    tag: tags.filter((Obj) => Obj.tag === tag)[0],
    tags: tags,
  };
}
