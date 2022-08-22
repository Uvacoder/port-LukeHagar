<script>
  export let data;
  import { Button, Divider } from "@brainandbones/skeleton";
  import Post from "../../../components/Post.svelte";
  import title from "../../../stores/title";
  title.set("Blog");
  let { posts } = data;
  let tags = [];
  for (const post of posts) {
    tags.push(...post.tags);
  }
  tags = Array.from(new Set([...tags]));
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>
<div class="grow">
  <h1 class=" py-2 text-center">Posts:</h1>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-4">
    {#each posts as post}
      <Post {post} />
    {/each}
  </div>
  <h1 class=" pt-8 pb-2 text-center">Tags:</h1>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-2">
    {#each tags as tag}
      <Button
        background="bg-surface-900"
        color="text-white"
        class="text-xl underline"
        href={`/blog/${tag.replaceAll(" ", "").toLowerCase()}`}
      >
        {tag}
      </Button>
    {/each}
  </div>
</div>
