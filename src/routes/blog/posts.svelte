<script>
  export let posts;
</script>

{#each posts as post}
  {post.title}
{/each}
