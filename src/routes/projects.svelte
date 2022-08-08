<script>
  import NavBar from "../components/NavBar.svelte";
  import GitHubData from "../components/GitHubData.svelte";
  import Body from "../components/Body.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<NavBar currentPage="Projects" />
<Body>
  <GitHubData />
</Body>
