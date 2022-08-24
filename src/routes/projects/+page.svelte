<script>
  export let data;
  import title from "../../stores/title";
  import GitHubData from "$lib/GitHubData.svelte";
  title.set("Projects");
  console.log(data);
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<GitHubData />
