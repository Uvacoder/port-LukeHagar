<script>
  import { Button } from "@brainandbones/skeleton";
  export let post;
  console.log(post);
</script>

<Button
  background="bg-surface-900"
  color="text-white"
  class="flex shadow-2xl"
  href={post.path}
>
  <div class="flex grow flex-col gap-4 rounded-xl py-2">
    <div class="flex grow flex-col justify-start">
      <p class="text-md text-start">{post.title}</p>
      {#if post.author}
        <p class="text-start text-xs">By: {post.author}</p>
      {/if}
    </div>
    <div class="flex justify-end">
      {#if post.date}
        <p class="text-md py-2">On: {post.date}</p>
      {/if}
    </div>
  </div>
</Button>
