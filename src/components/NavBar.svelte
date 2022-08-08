<script>
  export let currentPage;
</script>

<div class="px-2 py-2">
  <div class="bg-[#EAE3D2] h-1/6 flex justify-end rounded-xl">
    <p
      class=" bg-[#EAE3D2] text-grey-900 px-3 py-3 mx-3 my-3 text-xl font-medium absolute top-1 left-3"
    >
      {currentPage}
    </p>

    <a
      class=" hover:bg-[#1C3879] hover:animate-pulse bg-[#EAE3D2]  hover:text-white text-black px-3 py-3 mx-3 my-3 rounded-md text-sm font-medium "
      href="/"
    >
      Home
    </a>
    <a
      class=" hover:bg-[#1C3879] hover:animate-pulse bg-[#EAE3D2]  hover:text-white text-black px-3 py-3 mx-3 my-3 rounded-md text-sm font-medium"
      href="/projects"
    >
      Projects
    </a>
    <a
      class=" hover:bg-[#1C3879] hover:animate-pulse bg-[#EAE3D2]  hover:text-white text-black px-3 py-3 mx-3 my-3 rounded-md text-sm font-medium"
      href="/blog"
    >
      Blog
    </a>
    <a
      class=" hover:bg-[#333] hover:animate-pulse bg-[#EAE3D2]  hover:text-white text-black px-3 py-3 mx-3 my-3 rounded-md text-sm font-medium "
      href="https://www.github.com/lukehagar/"
    >
      Github
    </a>
    <a
      class=" hover:bg-[#0072b1] hover:animate-pulse bg-[#EAE3D2] hover:text-white text-black px-3 py-3 mx-3 my-3 rounded-md text-sm font-medium "
      href="https://www.linkedin.com/in/lukehagar/"
    >
      LinkedIn
    </a>
  </div>
</div>
