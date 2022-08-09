<script>
  export let currentPage;
</script>

<header class="px-2 mt-2">
  <div class="bg-[#EAE3D2] rounded-xl grid grid-cols-2">
    <div class="flex justify-start py-4 px-4">
      <p class=" bg-[#EAE3D2] text-grey-900 text-xl font-medium">
        {currentPage}
      </p>
    </div>
    <div class="flex justify-end py-2 px-2">
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse px-4 py-4 hover:text-white text-black rounded-md text-sm font-medium "
        href="/"
      >
        Home
      </a>
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse px-4 py-4 hover:text-white text-black rounded-md text-sm font-medium"
        href="/projects"
      >
        Projects
      </a>
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse px-4 py-4 hover:text-white text-black rounded-md text-sm font-medium"
        href="/blog/posts"
      >
        Blog
      </a>
      <a
        class=" hover:bg-[#333] hover:animate-pulse px-4 py-4 hover:text-white text-black rounded-md text-sm font-medium "
        href="https://www.github.com/lukehagar/"
      >
        Github
      </a>
      <a
        class=" hover:bg-[#0072b1] hover:animate-pulse px-4 py-4 hover:text-white text-black rounded-md text-sm font-medium "
        href="https://www.linkedin.com/in/lukehagar/"
      >
        LinkedIn
      </a>
    </div>
  </div>
</header>
