<script>
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>

<div class=" bg-slate-500 h-screen">
  <NavBar currentPage="Introduction" />

  <div class="px-2 py-2">
    <div class="h-auto bg-gray-400 rounded-xl flex justify-start px-3">
      <div class="px-3 py-3 ">
        <h1 class="">Hi My Name is Luke Hagar</h1>
        <br />
        <p class="">
          I am currently a Cloud Support Engineer at SailPoint Technologies. I
          greatly enjoy building thigs.

          <br />
          This website will be somewhere I can explore new technologies and showcase
          my abilities with various tech stacks
        </p>
      </div>
    </div>
  </div>
  <Footer />
</div>
