<script>
  export let data;
  $: ({ tags, tag, posts } = data);
  import title from "../../../stores/title";
  import Post from "../../../components/Post.svelte";
  import { Button, Divider, filter } from "@brainandbones/skeleton";
  title.set("Blog");
</script>

<svelte:head>
  <title>{tag.displayName}</title>
</svelte:head>

<div class="grow">
  <div class="flex flex-row justify-center gap-10 py-2">
    <a href="/blog/posts" class="text-center">Clear</a>
    <h1 class=" text-center">Posts tagged {tag.displayName}</h1>
  </div>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-4">
    {#each posts.filter((Obj) => Obj.tags.includes(tag.displayName)) as post}
      <Post {post} />
    {/each}
  </div>
  <h1 class=" pt-8 pb-2 text-center">Tags:</h1>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-2">
    {#each tags as postTag}
      <Button
        class="text-xl underline"
        background="bg-surface-900"
        color="text-white"
        href={`/blog/${postTag.tag}`}
      >
        {postTag.displayName}
      </Button>
    {/each}
  </div>
</div>
