<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import title from "../stores/title";
</script>

<div class="flex flex-col bg-[#1C3879] min-h-screen ">
  <NavBar currentPage={$title} />
  <slot class="flex-grow" />
  <Footer />
</div>
