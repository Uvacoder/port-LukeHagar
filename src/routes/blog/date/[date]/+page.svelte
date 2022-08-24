<script>
  export let data;
  $: ({ tags, tag, posts, dates, date } = data);
  import Post from "$lib/Post.svelte";
  import { Button, Divider, filter } from "@brainandbones/skeleton";
  console.log(tags);
</script>

<svelte:head>
  <title>{date}</title>
</svelte:head>

<div class="grow">
  <div class="flex flex-row justify-center gap-10 py-2">
    <a href="/blog/posts" class="text-center">Clear</a>
    <h1 class=" text-center">Blog Posts from {date}</h1>
  </div>
  <Divider class="py-2" />
  <div class="flex flex-wrap justify-center gap-4">
    {#each posts.filter((Obj) => Obj.date === date) as post}
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
