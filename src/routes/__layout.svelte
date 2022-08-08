<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
</script>

<div class="flex flex-col bg-[#1C3879] min-h-screen ">
  <slot class="flex-grow" />
  <Footer />
</div>
