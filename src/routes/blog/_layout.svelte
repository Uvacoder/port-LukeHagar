<script>
  import { Button, Card } from "@brainandbones/skeleton";
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

<div class="flex grow flex-col text-white">
  <div class="flex flex-row gap-2">
    <Button background="bg-surface-900" color="text-white" href="/blog/posts"
      >Back</Button
    >
    <Card background="bg-surface-900" class="flex grow flex-wrap">
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
                    href={`/blog/${tag.replaceAll(" ", "").toLowerCase()}`}
                    >{tag}</a
                  >
                {/each}
              </div>
            {/if}
          </div>
        </div>
        <div class="flex grow md:justify-end">
          {#if date}
            <p class="whitespace-nowrap py-2 px-2 text-xl">On: {date}</p>
          {/if}
        </div>
      </div>
    </Card>
  </div>
  <Card background="bg-surface-900" color="text-white" class="mt-2">
    <div
      class="prose flex max-w-none flex-col justify-center text-white prose-headings:underline prose-img:rounded-xl lg:prose-xl xl:prose-2xl"
    >
      <slot />
    </div>
  </Card>
</div>
