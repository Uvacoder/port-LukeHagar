<script>
  import Body from "../../components/Body.svelte";
  import title from "../../stores/title";
  import Post from "../../components/Post.svelte";
  import { Divider } from "@brainandbones/skeleton";
  title.set("Blog");
  export let posts;
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<h1 class=" py-2 text-center">Posts:</h1>
<Divider class="py-2" />
<div class="flex flex-wrap justify-center gap-2">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
