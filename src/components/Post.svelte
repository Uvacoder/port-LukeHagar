<script>
  import { Button } from "@brainandbones/skeleton";
  export let post;
  console.log(post);
</script>

<Button
  background="bg-white"
  color="text-black"
  class="flex shadow-2xl"
  href={post.path}
>
  <div class="flex grow flex-row rounded-xl py-2">
    <div class="flex grow flex-col justify-start">
      <p class="text-md text-start">{post.title}</p>
      {#if post.author}
        <p class="text-start text-xs">By: {post.author}</p>
      {/if}
      {#if post.tags}
        <div class=" flex flex-wrap gap-3 pt-2">
          <p class="text-lg">Tags:</p>
          {#each post.tags as tag}
            <a
              class="text-lg underline"
              href={`/blog/${tag.replaceAll(" ", "").toLowerCase()}`}>{tag}</a
            >
          {/each}
        </div>
      {/if}
    </div>
    <div class="flex justify-end">
      {#if post.date}
        <p class="text-md py-2">On: {post.date}</p>
      {/if}
    </div>
  </div>
</Button>
