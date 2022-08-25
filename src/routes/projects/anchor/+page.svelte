<script>
  import title from "../../../stores/title";
  title.set("Anchor");
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div
  class="no-scrollbar flex grow flex-col overflow-hidden overflow-y-scroll rounded-xl bg-surface-900 p-6"
>
  <p>More Content Coming Soon</p>
</div>
