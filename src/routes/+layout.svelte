<script>
  import {
    AccordionGroup,
    AccordionItem,
    Button,
    Dialog,
    Drawer,
    GradientHeading,
  } from "@brainandbones/skeleton";
  import "highlight.js/styles/github-dark.css";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import "../app.css";
  import "../theme.css";

  import { browser } from "$app/env";
  import { assets } from "$app/paths";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import * as THREE from "three";
  import webVitals from "../assets/vitals";

  export let data;
  let { posts } = data;
  let tags = [];
  for (const post of posts) {
    tags.push(...post.tags);
  }
  tags = Array.from(new Set([...tags]));

  // Drawer
  const drawerOpen = () => {
    console.log("open triggered");
    drawer.set(true);
  };

  onMount(() => {
    function onMouseMove(event) {
      mouse.x = event.clientX - windowHalf.x;
      mouse.y = event.clientY - windowHalf.x;
    }

    function onMouseWheel(event) {
      camera.position.z += event.deltaY * 0.1; // move camera along z-axis
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("wheel", onMouseWheel, false);

    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    let x, y;

    const loader = new THREE.CubeTextureLoader();

    console.log(assets);
    const texture = loader.load([
      "/Threejs Assets/blue/bkg1_right.png",
      "/Threejs Assets/blue/bkg1_left.png",
      "/Threejs Assets/blue/bkg1_top.png",
      "/Threejs Assets/blue/bkg1_bot.png",
      "/Threejs Assets/blue/bkg1_front.png",
      "/Threejs Assets/blue/bkg1_back.png",
    ]);

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      30000
    );
    camera.position.set(1200, -250, 2000);

    scene.background = texture;

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#background"),
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.minDistance = 700;
    controls.maxDistance = 1500;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.05;

    function animate() {
      requestAnimationFrame(animate);

      target.x = (1 - mouse.x) * 0.02;
      target.y = (1 - mouse.y) * 0.02;
      camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
      camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
      renderer.render(scene, camera);
      controls.update();
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();
  });

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
      title: "Blog Tags",
      list: [
        ...tags.map((Obj) => {
          return {
            href: `/blog/${Obj.replaceAll(" ", "").toLowerCase()}`,
            label: Obj,
          };
        }),
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
</script>

<Dialog
  backdrop="bg-primary-500/50"
  blur="backdrop-blur-lg"
  card="bg-primary-500"
  duration={250}
/>

<canvas id="background" />

<div class="relative z-50 flex flex-row text-white">
  <Drawer
    visible={drawer}
    fixed="left"
    background="bg-surface-900/50 lg:bg-transparent"
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
      <div class="no-scrollbar overscroll-contain">
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
      </div>
    </svelte:fragment>
  </Drawer>

  <!-- Page Content -->
  <div class="flex grow flex-col justify-center overflow-hidden p-4">
    <header class="flex justify-center pb-8 lg:hidden">
      <!-- Hamburger Menu -->
      <Button variant="minimal" on:click={drawerOpen}>
        <span class="font-bold text-white">Menu</span>
      </Button>
    </header>

    <!-- Page Slot -->
    <div class="grow xl:flex">
      <slot />
    </div>
  </div>
</div>

<style>
  canvas {
    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
