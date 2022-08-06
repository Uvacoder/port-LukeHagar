<script>
  import NavBar from "../components/NavBar.svelte";
  import GitHubData from "../components/GitHubData.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class=" bg-slate-500 h-screen">
  <NavBar currentPage="Projects" />
  <GitHubData />
  <Footer />
</div>
