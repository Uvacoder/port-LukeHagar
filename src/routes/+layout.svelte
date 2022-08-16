<script>
  import "../theme.css";
  import "../app.css";
  import "highlight.js/styles/github-dark.css";
  import { Dialog } from "@brainandbones/skeleton";
  import Body from "../components/Body.svelte";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import title from "../stores/title";
  export let data;
  console.log(data);
</script>

<Dialog
  backdrop="bg-primary-500/50"
  blur="backdrop-blur-lg"
  card="bg-primary-500"
  duration={250}
/>
<body class="flex flex-col bg-surface-500 min-h-screen">
  <NavBar currentPage={$title} />
  <Body>
    <slot />
  </Body>
  <Footer />
</body>
