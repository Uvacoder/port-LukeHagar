<script>
  import "../app.css";
  import Body from "../components/Body.svelte";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import title from "../stores/title";
</script>

<body class="flex flex-col bg-[#1C3879] min-h-screen ">
  <NavBar currentPage={$title} />
  <Body class="flex-auto">
    <slot />
  </Body>
  <Footer />
</body>
