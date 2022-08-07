<script>
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Editor from "svelte-inline-markdown-editor";
</script>

<svelte:head>
  <title>plex-api-oauth</title>
</svelte:head>

<div class=" bg-slate-500 h-screen">
  <NavBar currentPage="plex-api-oauth" />
  <Editor text="Hello, _world_!" />
  <Footer />
</div>
