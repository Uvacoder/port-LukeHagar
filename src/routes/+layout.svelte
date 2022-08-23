<script>
  import {
    AccordionGroup,
    AccordionItem,
    Button,
    Dialog,
    Drawer,
    GradientHeading,
    Menu,
  } from "@brainandbones/skeleton";
  import "highlight.js/styles/github-dark.css";
  import "../app.css";
  import "../theme.css";

  import { browser } from "$app/env";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import * as THREE from "three";
  import webVitals from "../assets/vitals";
  import Footer from "../components/Footer.svelte";

  // Drawer
  const drawerOpen = () => {
    console.log("open triggered");
    drawer.set(true);
  };
  const drawerClose = () => {
    drawer.set(false);
  };

  onMount(() => {
    const scene = new THREE.Scene();
    const blackbg = new THREE.Color("black");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      100
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#background"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    function addStar() {
      console.log("Adding Star");
      const geometry = new THREE.SphereGeometry(0.25, 6, 6);
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
      });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(250));
      star.position.set(x, y, z);
      scene.add(star);
    }

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    function animate() {
      requestAnimationFrame(animate);
      camera.rotateX(0.0004);
      camera.rotateY(0.0003);
      camera.rotateZ(0.0001);
      renderer.render(scene, camera);
    }

    animate();

    for (const i of Array(1000).fill()) {
      addStar();
    }
  });

  export let data;
  let analyticsId = import.meta.env.VITE_VERCEL_ANALYTICS_ID;

  let storeAccordion = writable([]);

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }

  const navigation = [
    {
      title: "Main",
      list: [
        { href: "/", label: "Home" },
        { href: "/blog/posts", label: "Blog" },
        { href: "/projects", label: "Projects" },
        { href: "/aboutme", label: "About Me" },
      ],
    },
    {
      title: "Projects",
      list: [
        { href: "/projects/anchor", label: "Anchor" },
        { href: "/projects/plex-api-oauth", label: "plex-api-oauth" },
      ],
    },
    {
      title: "Socials",
      list: [
        { href: "https://www.github.com/lukehagar/", label: "GitHub" },
        { href: "https://www.linkedin.com/in/lukehagar/", label: "LinkedIn" },
      ],
    },
  ];

  const drawer = writable(false);

  console.log(data);
</script>

<Dialog
  backdrop="bg-primary-500/50"
  blur="backdrop-blur-lg"
  card="bg-primary-500"
  duration={250}
/>

<canvas
  id="background"
  class="fixed top-0 left-0 min-h-[844] lg:min-h-screen"
/>
<div class="absolute flex w-full flex-row text-white">
  <Drawer
    visible={drawer}
    fixed="left"
    background="lg:bg-transparent"
    border="border-0"
    class=" p-4"
  >
    <svelte:fragment slot="header">
      <div class="flex items-center justify-center  p-4">
        <a href="/" class="text-xl font-bold">
          <GradientHeading
            tag="h1"
            class="text-3xl"
            direction="bg-gradient-to-r"
            from="from-primary-500"
            to="to-accent-500"
            >Luke Hagar
          </GradientHeading>
        </a>
      </div>
    </svelte:fragment>
    <svelte:fragment slot="main">
      <AccordionGroup selected={storeAccordion} single>
        {#each navigation as { title, list }, i}
          <div
            on:mouseenter={() => {
              storeAccordion.set([i]);
            }}
            on:mouseleave={() => {
              storeAccordion.set([]);
            }}
          >
            <AccordionItem value={i}>
              <svelte:fragment slot="title">
                <p class="text-white">{title}</p>
              </svelte:fragment>
              <svelte:fragment slot="description">
                {#each list as { href, label }}
                  <div class="flex-col">
                    <Button
                      size="base"
                      color="text-white"
                      background="bg-transparent"
                      width="w-auto"
                      {href}
                      disabled={false}
                    >
                      {label}
                    </Button>
                  </div>
                {/each}
              </svelte:fragment>
            </AccordionItem>
          </div>
        {/each}
      </AccordionGroup>
    </svelte:fragment>
  </Drawer>

  <!-- Page Content -->
  <div id="main" class="flex flex-col">
    <header class=" space-x-4 p-8 lg:hidden">
      <!-- Hamburger Menu -->
      <Button variant="minimal" on:click={drawerOpen}>
        <span class="font-bold text-white">Menu</span>
      </Button>
    </header>

    <!-- Page Slot -->
    <div class="flex grow content-center p-6">
      <slot />
    </div>
  </div>
</div>
