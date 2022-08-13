<script>
  import Body from "../../components/Body.svelte";
  import currentPage from "../../stores/title";
  export let title;
  export let author;
  export let date;
  currentPage.set(title);
  console.log($currentPage);
</script>

<Body>
  <div class="py-2">
    <div class="grid grid-cols-2 flex-row bg-white px-2 py-2 rounded-xl my-2">
      <div class="flex flex-col justify-start px-2">
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
    </div>
    <div class="px-2">
      <slot />
    </div>
  </div>
</Body>
