<script>
  import Footer from "../components/Footer.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class=" bg-slate-500 h-full">
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
        src="https://camo.githubusercontent.com/e8141ee526b3274afa116aadc038780de04361a3a3765963027112416989efe1/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d6c756b656861676172267468656d653d767565"
      />
      <img
        alt="My Work GitHub Stats"
        class="py-1 px-1 w-1/2"
        src="https://camo.githubusercontent.com/c4001bf06dba7260b67a4e765cff963f219fa0fecda99e6a107ea0164157198b/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d6c756b652d68616761722d7370267468656d653d767565"
      />
    </div>
  </div>
  <Footer />
</div>
