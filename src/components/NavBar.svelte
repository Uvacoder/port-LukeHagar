<script>
  export let currentPage;
  import { Button, Card, GradientHeading } from "@brainandbones/skeleton";
</script>

<div class="px-2 pt-1">
  <Card background="bg-surface-800" color="text-white" class="shadow-2xl">
    <div class="grid grid-cols-1 gap-4 rounded-xl lg:grid-cols-2">
      <div class="flex justify-center gap-2 lg:justify-start">
        <GradientHeading
          tag="h1"
          class="text-3xl"
          direction="bg-gradient-to-r"
          from="from-primary-500"
          to="to-accent-500">Luke Hagar</GradientHeading
        >
      </div>
      <div
        class="flex flex-auto flex-wrap justify-center gap-2 lg:flex-row lg:justify-end"
      >
        <Button
          size="base"
          background="bg-accent-400"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Home"}
          class="grow hover:animate-pulse"
          href="/"
        >
          Home
        </Button>
        <Button
          size="base"
          background="bg-accent-400"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Projects"}
          class="grow hover:animate-pulse"
          href="/projects"
        >
          Projects
        </Button>
        <Button
          size="base"
          background="bg-accent-400"
          color="text-white"
          ring="ring-accent-500"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-auto"
          disabled={currentPage === "Blog"}
          class="grow hover:animate-pulse"
          href="/blog/posts"
        >
          Blog
        </Button>
        <div class="flex grow flex-wrap justify-center gap-2">
          <Button
            size="base"
            background="hover:bg-[#333] bg-accent-400"
            color="text-white"
            ring="ring-accent-500"
            weight="ring-none"
            rounded="rounded-lg"
            width="w-auto"
            disabled={false}
            class="grow hover:animate-pulse"
            href="https://www.github.com/lukehagar/"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            size="base"
            background="hover:bg-[#0072b1] bg-accent-400"
            color="text-white"
            ring="ring-accent-500"
            weight="ring-none"
            rounded="rounded-lg"
            width="w-auto"
            disabled={false}
            class="grow hover:animate-pulse"
            href="https://www.linkedin.com/in/lukehagar/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  </Card>
</div>
