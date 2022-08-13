<script>
  import Body from "../../components/Body.svelte";
  import title from "../../stores/title";
  import Post from "../../components/Post.svelte";
  title.set("Blog");
  export let posts;
</script>

<Body>
  <div class="">
    <div class="rounded-xl bg-white">
      <h1 class=" py-2 text-center">Posts:</h1>
      <div class="flex flex-wrap justify-center lg:justify-start">
        {#each posts as post}
          <Post {post} />
        {/each}
      </div>
    </div>
  </div>
</Body>
