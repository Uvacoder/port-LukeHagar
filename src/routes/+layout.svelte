<script>
  import "../theme.css";
  import "../app.css";
  import "highlight.js/styles/github-dark.css";
  import { Dialog } from "@brainandbones/skeleton";
  import Body from "../components/Body.svelte";
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
  import title from "../stores/title";
  import webVitals from "../assets/vitals";
  import { browser } from "$app/env";
  import { page } from "$app/stores";

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
    console.log(analyticsId);
  }
  console.log(analyticsId);
  console.log(browser);
  console.log(page);
  export let data;
  console.log(data);
</script>

<Dialog
  backdrop="bg-primary-500/50"
  blur="backdrop-blur-lg"
  card="bg-primary-500"
  duration={250}
/>
<body class="flex min-h-screen flex-col bg-surface-500">
  <NavBar currentPage={$title} />
  <Body>
    <slot />
  </Body>
  <Footer />
</body>
