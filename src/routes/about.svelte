<script>
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class=" bg-slate-500 w-full h-screen bg-cover bg-center">
  <NavBar currentPage="About" />

  <div class="px-2 py-2">
    <div class="h-auto bg-gray-400 rounded-xl flex justify-center px-3">
      <div class="px-3 py-3 ">
        <h1>About Me</h1>
      </div>
    </div>
    <div class="flex justify-center">
      <img
        alt="My Personal GitHub Stats"
        class="py-1 px-1 w-1/2"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
      />
      <img
        alt="My Work GitHub Stats"
        class="py-1 px-1 w-1/2"
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
      />
    </div>
  </div>
  <Footer />
</div>
