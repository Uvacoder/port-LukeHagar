<script>
  import { Card } from "@brainandbones/skeleton";

  export let post;
</script>

<Card background="bg-accent-500" color="text-white" class="shadow-xl grow">
  <a href={post.path} class="grow ">
    <div class="grid grid-cols-2 flex-row bg-accent-500 px-2 py-2 rounded-xl">
      <div class="flex flex-col justify-start px-2">
        <p class="text-md">{post.title}</p>
        {#if post.author}
          <p class="text-xs">By: {post.author}</p>
        {/if}
      </div>
      <div class="flex justify-end">
        {#if post.date}
          <p class="text-md py-2 px-2">On: {post.date}</p>
        {/if}
      </div>
    </div>
  </a>
</Card>
