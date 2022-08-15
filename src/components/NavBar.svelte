<script>
  export let currentPage;
  import { Card } from "@brainandbones/skeleton";
  import { Button } from "@brainandbones/skeleton";
  import { GradientHeading } from "@brainandbones/skeleton";
</script>

<div class="p-2">
  <Card background="bg-surface-800" color="text-white">
    <div class=" rounded-xl lg:grid lg:grid-cols-2">
      <div class="flex justify-center gap-8 lg:justify-start py-4 px-4">
        <GradientHeading
          tag="h1"
          class="text-3xl"
          direction="bg-gradient-to-r"
          from="from-primary-500"
          to="to-accent-500">Luke Hagar</GradientHeading
        >
      </div>
      <div
        class="flex justify-center py-2 px-2 gap-2 lg:flex-row lg:justify-end flex-col"
      >
        <Button
          size="base"
          background="bg-accent-700"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Home"}
          class="hover:animate-pulse"
          href="/"
        >
          Home
        </Button>
        <Button
          size="base"
          background="bg-accent-700"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Projects"}
          class="hover:animate-pulse"
          href="/projects"
        >
          Projects
        </Button>
        <Button
          size="base"
          background="bg-accent-700"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Blog"}
          class="hover:animate-pulse"
          href="/blog/posts"
        >
          Blog
        </Button>

        <Button
          size="base"
          background="hover:bg-[#333] bg-accent-700"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={false}
          class="hover:animate-pulse"
          href="https://www.github.com/lukehagar/"
        >
          GitHub
        </Button>
        <Button
          size="base"
          background="hover:bg-[#0072b1] bg-accent-700"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={false}
          class="hover:animate-pulse"
          href="https://www.linkedin.com/in/lukehagar/"
        >
          LinkedIn
        </Button>
      </div>
    </div>
  </Card>
</div>
