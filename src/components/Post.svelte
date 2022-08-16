<script>
  import { Card } from "@brainandbones/skeleton";
  export let post;
</script>

<Card background="bg-white" color="text-black" class="shadow-xl grow">
  <a href={post.path}>
    <div class="grid grid-cols-2 flex-row py-2 rounded-xl">
      <div class="flex flex-col justify-start ">
        <p class="text-md">{post.title}</p>
        {#if post.author}
          <p class="text-xs">By: {post.author}</p>
        {/if}
        {#if post.tags}
          <div class=" flex flex-wrap pt-2 gap-3">
            <p class="text-lg">Tags:</p>
            {#each post.tags as tag}
              <a
                class="underline text-lg"
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
  </a>
</Card>
