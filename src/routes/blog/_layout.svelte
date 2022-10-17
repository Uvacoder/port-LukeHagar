<script>
  import currentPage from "../../stores/title";
  export let data;
  export let title;
  export let author;
  export let date;
  export let tags;
  currentPage.set(title);
</script>

<svelte:head>
  <title>{$currentPage}</title>
</svelte:head>

<div class="flex grow flex-col text-white">
  <div class="flex flex-row gap-2">
    <a
      class="items-center rounded-xl bg-surface-900 px-2 py-5 text-white"
      href="/blog/posts">Back</a
    >
    <div class="flex grow flex-wrap rounded-xl bg-surface-900 px-2 py-5">
      <div class="flex grow flex-wrap">
        <div class="flex flex-col justify-start gap-1 px-2">
          <p class="text-xl">{title}</p>
          {#if author}
            <p class="text-xs">By: {author}</p>
          {/if}
          <div>
            {#if tags.length > 0}
              <div class="flex flex-wrap gap-1 ">
                <p class="text-xs">Tags:</p>
                {#each tags as tag}
                  <a
                    class="text-xs underline"
                    href={`/blog/tag/${tag.replaceAll(" ", "").toLowerCase()}`}
                    >{tag}</a
                  >
                {/each}
              </div>
            {/if}
          </div>
        </div>
        <div class="flex grow sm:justify-end">
          {#if date}
            <p class="whitespace-nowrap py-2 px-2 text-xl">On: {date}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div class="mt-2 rounded-xl bg-surface-900 px-2 py-5 text-white ">
    <div
      class="prose flex max-w-none flex-col justify-center text-white prose-headings:underline prose-img:rounded-xl"
    >
      <slot />
    </div>
  </div>
</div>
