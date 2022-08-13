<script>
  export let post;
</script>

<a href={post.path} class="py-1 px-1 w-96">
  <div class="grid grid-cols-2 flex-row bg-[#607EAA] px-2 py-2 rounded-xl">
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
