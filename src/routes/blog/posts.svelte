<script>
  import Body from "../../components/Body.svelte";
  import NavBar from "../../components/NavBar.svelte";

  export let posts;
</script>

<NavBar currentPage="Blog" />
<Body>
  <div class="px-4 py-4">
    <h1>Posts:</h1>
  </div>
  <div class="grid grid-cols-4 gap-4 py-2 px-2 my-4">
    {#each posts as post}
      <a href={post.path}>
        <div class="rounded-xl py-2 px-2 my-4 bg-white">
          <p class="text-xl">{post.title}</p>
          <p class="text-xs">{post.date}</p>
        </div>
      </a>
    {/each}
  </div>
</Body>
