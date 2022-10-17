<script>
  export let data;
  $: ({ tags, tag, posts, dates } = data);
  import Post from "$lib/Post.svelte";
  import { Divider, filter } from "@brainandbones/skeleton";
</script>

<svelte:head>
  <title>{tag.displayName}</title>
</svelte:head>

<div class="grow">
  <div class="flex grow flex-col  justify-center">
    <div class="flex flex-row justify-center gap-10 py-2">
      <h1 class="grow text-start">Blog Posts tagged {tag.displayName}</h1>
      <a href="/blog/posts" class="text-end">Clear</a>
    </div>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-4">
      {#each posts.filter((Obj) => Obj.tags.includes(tag.displayName)) as post}
        <Post {post} />
      {/each}
    </div>
    <h1 class=" pt-8 pb-2 text-start">Tags:</h1>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-2">
      {#each tags.sort( (a, b) => a.displayName.localeCompare(b.displayName) ) as postTag}
        <a
          class="bg-surface-900 text-xl text-white underline"
          href={`/blog/tag/${postTag.tag}`}
        >
          {postTag.displayName}
        </a>
      {/each}
    </div>
    <h1 class=" pt-8 pb-2 text-start">Dates:</h1>
    <Divider class="py-2" />
    <div class="flex flex-wrap justify-center gap-2">
      {#each dates as dateEntry}
        <a
          class="bg-surface-900 text-xl text-white underline"
          href={`/blog/date/${dateEntry}`}
        >
          {dateEntry}
        </a>
      {/each}
    </div>
  </div>
</div>
