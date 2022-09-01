/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let tags = [];
  let dates = [];
  const date = params.date;
  const allPostFiles = import.meta.glob("../../*/*.{svc,md}", { eager: true });
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = `/blog${path.slice(2, -9)}`;
    return { ...post.metadata, path: postPath };
  });
  const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  for (const post of posts) {
    tags.push(...post.tags);
    dates.push(post.date);
  }
  tags = Array.from(new Set([...tags]));
  dates = Array.from(new Set([...dates]));
  tags = tags.map((Obj) => {
    return { tag: Obj.replaceAll(" ", "").toLowerCase(), displayName: Obj };
  });
  return {
    posts: posts,
    tags,
    date: date,
    dates,
  };
}
