<script>
  import Body from "../../components/Body.svelte";
  import NavBar from "../../components/NavBar.svelte";

  export let title;
  export let author;
  export let date;
</script>

<NavBar currentPage={title} />
<Body>
  <div class="py-2">
    <div class="grid grid-cols-2 flex-row bg-white px-2 py-2 rounded-xl my-2">
      <div class="flex flex-col justify-start">
        <p class="text-xl">{title}</p>
        <p class="text-xs">By: {author}</p>
      </div>
      <div class="flex justify-end">
        <p class="text-xl py-2 px-2">On: {date}</p>
      </div>
    </div>
    <slot />
  </div>
</Body>
