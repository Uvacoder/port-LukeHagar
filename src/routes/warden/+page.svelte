<script>
  import { CodeBlock } from "@brainandbones/skeleton";
  import title from "../../stores/title";
  title.set("Warden");
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

<div class="prose max-w-none">
  <h1 class="text-center">{$title}</h1>

  <a class="underline " href="https://github.com/LukeHagar/Warden">Repo link</a>
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
