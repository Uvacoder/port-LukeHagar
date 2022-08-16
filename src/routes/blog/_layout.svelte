<script>
  import { Card } from "@brainandbones/skeleton";
  import currentPage from "../../stores/title";
  export let data;
  console.log(data);
  export let title;
  export let author;
  export let date;
  export let tags;
  currentPage.set(title);
</script>

<svelte:head>
  <title>{$currentPage}</title>
</svelte:head>

<Card background="bg-white" color="text-black">
  <div class="grid grid-cols-2 flex-row rounded-xl my-2">
    <div class="flex flex-col justify-start px-2 gap-1">
      <p class="text-xl">{title}</p>
      {#if author}
        <p class="text-xs">By: {author}</p>
      {/if}
    </div>
    <div class="flex justify-end">
      {#if date}
        <p class="text-xl py-2 px-2">On: {date}</p>
      {/if}
    </div>
    <div class="col-span-2">
      {#if tags.length > 0}
        <div class="flex flex-wrap gap-1 pl-2 pt-4">
          <p class="text-xs">Tags:</p>
          {#each tags as tag}
            <a
              class="underline text-xs"
              href={`/blog/${tag.replaceAll(" ", "").toLowerCase()}`}>{tag}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</Card>
<Card background="bg-white" color="text-black" class="mt-2">
  <div
    class="prose prose-img:rounded-xl lg:prose-xl xl:prose-2xl prose-headings:underline flex flex-col justify-center max-w-none"
  >
    <slot />
  </div>
</Card>
