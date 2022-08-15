<script>
  import "../theme.css";
  import "../app.css";
  import Body from "../components/Body.svelte";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import title from "../stores/title";
</script>

<body class="flex flex-col bg-surface-500 min-h-screen">
  <NavBar currentPage={$title} />
  <Body>
    <slot />
  </Body>
  <Footer />
</body>
