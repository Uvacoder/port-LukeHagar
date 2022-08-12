<script>
  export let currentPage;
</script>

<header class="px-2 mt-2">
  <div class="bg-[#EAE3D2] rounded-xl lg:grid lg:grid-cols-2">
    <div class="flex justify-center lg:justify-start py-4 px-4">
      <p class=" bg-[#EAE3D2] text-grey-900 text-xl font-medium">
        {currentPage}
      </p>
    </div>
    <div
      class="flex justify-center py-2 px-2 lg:flex-row lg:justify-end flex-col"
    >
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse py-2 px-2 lg:px-4 lg:py-4 text-center lg:text-left hover:text-white text-black rounded-md text-sm font-medium "
        href="/"
      >
        Home
      </a>
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse py-2 px-2 lg:px-4 lg:py-4 text-center lg:text-left hover:text-white text-black rounded-md text-sm font-medium"
        href="/projects"
      >
        Projects
      </a>
      <a
        class=" hover:bg-[#1C3879] hover:animate-pulse py-2 px-2 lg:px-4 lg:py-4 text-center lg:text-left hover:text-white text-black rounded-md text-sm font-medium"
        href="/blog/posts"
      >
        Blog
      </a>
      <a
        class=" hover:bg-[#333] hover:animate-pulse py-2 px-2 lg:px-4 lg:py-4 text-center lg:text-left hover:text-white text-black rounded-md text-sm font-medium "
        href="https://www.github.com/lukehagar/"
      >
        Github
      </a>
      <a
        class=" hover:bg-[#0072b1] hover:animate-pulse py-2 px-2 lg:px-4 lg:py-4 text-center lg:text-left hover:text-white text-black rounded-md text-sm font-medium "
        href="https://www.linkedin.com/in/lukehagar/"
      >
        LinkedIn
      </a>
    </div>
  </div>
</header>
