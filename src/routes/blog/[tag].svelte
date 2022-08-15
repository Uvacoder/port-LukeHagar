<script>
  // populated with data from the endpoint
  export let tags;
  export let tag;
  export let posts;
  import title from "../../stores/title";
  import Post from "../../components/Post.svelte";
  import { Divider, filter } from "@brainandbones/skeleton";
  title.set("Blog");
  //   let tags = [];
  //   for (const post of posts) {
  //     tags.push(...post.tags);
  //   }
  //   tags = Array.from(new Set([...tags]));
  //   console.log(tags);
  console.log(tag);
</script>

<svelte:head>
  <title>{tag.displayName}</title>
</svelte:head>

<h1 class=" py-2 text-center">Posts tagged {tag.displayName}:</h1>
<Divider class="py-2" />
<div class="flex flex-wrap justify-center gap-2">
  {#each posts.filter((Obj) => Obj.tags.includes(tag.displayName)) as post}
    <Post {post} />
  {/each}
</div>
<h1 class=" pt-8 pb-2 text-center">Tags:</h1>
<Divider class="py-2" />
<div class="flex flex-wrap justify-center gap-6">
  {#each tags as postTag}
    <a class="underline text-xl" href={`/blog/${postTag.tag}`}
      >{postTag.displayName}</a
    >
  {/each}
</div>
