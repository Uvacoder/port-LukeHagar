<script>
  import title from "../stores/title";
  import GitHubData from "../components/GitHubData.svelte";
  title.set("Projects");
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<GitHubData />
