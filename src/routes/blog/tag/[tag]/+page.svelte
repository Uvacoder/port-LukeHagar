<script>
  export let data;
  $: ({ tags, tag, posts, dates } = data);
  import Post from "$lib/Post.svelte";
  import { Button, Divider, filter } from "@brainandbones/skeleton";
</script>

<svelte:head>
  <title>{tag.displayName}</title>
</svelte:head>

<div class="flex grow flex-col content-center justify-center">
  <div class="flex flex-row justify-center gap-10 py-2">
    <a href="/blog/posts" class="text-center">Clear</a>
    <h1 class=" text-center">Blog Posts tagged {tag.displayName}</h1>
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
    {#each tags.sort( (a, b) => a.displayName.localeCompare(b.displayName) ) as postTag}
      <Button
        class="text-xl underline"
        background="bg-surface-900"
        color="text-white"
        href={`/blog/tag/${postTag.tag}`}
      >
        {postTag.displayName}
      </Button>
    {/each}
  </div>
  <h1 class=" pt-8 pb-2 text-center">Dates:</h1>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-2">
    {#each dates as dateEntry}
      <Button
        class="text-xl underline"
        background="bg-surface-900"
        color="text-white"
        href={`/blog/date/${dateEntry}`}
      >
        {dateEntry}
      </Button>
    {/each}
  </div>
</div>
