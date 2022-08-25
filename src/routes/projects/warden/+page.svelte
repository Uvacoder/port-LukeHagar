<script>
  import { CodeBlock } from "@brainandbones/skeleton";
</script>

<svelte:head>
  <title>Warden</title>
</svelte:head>

<div
  class="no-scrollbar flex grow flex-col overflow-hidden overflow-y-scroll rounded-xl bg-surface-900 p-6"
>
  <div class="prose max-w-none text-white">
    <h1 class="text-center text-white">Warden</h1>

    <a
      class="text-blue-500 underline"
      href="https://github.com/LukeHagar/Warden">Repo link</a
    >
    <p class="">
      I'll be honest I was so excited about this project before I got this deep
      into it, and I have really realized a couple things
    </p>

    <CodeBlock
      language="md"
      code={`
  1. I really Hate React
  2. Most of my work up to now has been in the Acompanying API-OAuth Module
  3. There are better languages to write this in 
  4. Svelte Exists
  `}
    />

    <p>
      So for now my primary focus areas are getting very very familiar with
      Svelete (hence this website), and improving the output, functionality, and
      the speed of the OAuth Module before redesigning the UI in Svelte using
      Skeleton
    </p>
  </div>
</div>
