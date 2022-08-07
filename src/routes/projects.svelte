<script>
  import NavBar from "../components/NavBar.svelte";
  import GitHubData from "../components/GitHubData.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class=" bg-slate-500 w-full h-screen bg-cover bg-center">
  <NavBar currentPage="Projects" />
  <GitHubData />
  <Footer />
</div>
