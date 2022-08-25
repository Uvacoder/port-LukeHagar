<script>
  export let data;
  import { Button, Divider } from "@brainandbones/skeleton";
  import Post from "$lib/Post.svelte";
  import title from "../../../stores/title";
  title.set("Blog");
  let { posts } = data;
  let tags = [];
  let dates = [];
  for (const post of posts) {
    tags.push(...post.tags);
    dates.push(post.date);
  }
  tags = Array.from(new Set([...tags]));
  dates = Array.from(new Set([...dates]));
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="grow">
  <div class="flex grow flex-col justify-center">
    <h1 class=" py-2 text-start">Posts:</h1>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-4">
      {#each posts as post}
        <Post {post} />
      {/each}
    </div>
    <h1 class=" pt-8 pb-2 text-start">Tags:</h1>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-2">
      {#each tags.sort((a, b) => a.localeCompare(b)) as tag}
        <Button
          background="bg-surface-900"
          color="text-white"
          class="text-xl underline"
          href={`/blog/tag/${tag.replaceAll(" ", "").toLowerCase()}`}
        >
          {tag}
        </Button>
      {/each}
    </div>
    <h1 class=" pt-8 pb-2 text-start">Dates:</h1>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-2">
      {#each dates as dateEntry}
        <Button
          background="bg-surface-900"
          color="text-white"
          class="text-xl underline"
          href={`/blog/date/${dateEntry}`}
        >
          {dateEntry}
        </Button>
      {/each}
    </div>
  </div>
</div>
