<script>
  import title from "../stores/title";
  import GitHubData from "../components/GitHubData.svelte";
  import Body from "../components/Body.svelte";
  title.set("Projects");
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Body>
  <GitHubData />
</Body>
