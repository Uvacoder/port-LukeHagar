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
    <div class="h-auto bg-gray-200 rounded-xl flex justify-start px-3">
      <div class="px-2 py-2 ">
        <h1 class="">Hi My Name is Luke Hagar</h1>
        <br />
        <p class="">I am currently a Cloud Support Engineer at SailPoint.</p>
      </div>
    </div>
  </div>
  <div class="flex px-2 py-2">
    <img
      alt="My Personal GitHub Stats"
      class="flex-grow hover:opacity-60"
      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lukehagar&theme=vue"
    />
    <img
      alt="My Work GitHub Stats"
      class="flex-grow hover:opacity-60"
      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=luke-hagar-sp&theme=vue"
    />
  </div>
  <Footer />
</div>
