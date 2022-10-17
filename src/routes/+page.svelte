<script>
  import { Avatar, Divider } from "@brainandbones/skeleton";
  import title from "../stores/title";

  title.set("Home");
</script>

<svelte:head>
  <title>{$title}</title>
  <meta name="description" content="LukeHagar.com" />
</svelte:head>

<div class="flex grow justify-center text-white">
  <div class="flex flex-col justify-center bg-transparent">
    <div class="flex flex-wrap justify-center ">
      <Avatar
        initials="LH"
        src="https://avatars.githubusercontent.com/u/5702154?v=4"
        width="w-48"
      />
      <div class="flex flex-col pt-12 pl-6 ">
        <h1 class="text-center font-bold ">Hey I'm Luke</h1>
        <p class="text-center ">And I enjoy making things.</p>
      </div>
    </div>
    <div class="flex flex-wrap  justify-center pt-4">
      <div class="flex flex-row flex-wrap justify-center">
        <a
          href="https://www.github.com/lukehagar"
          target="_blank"
          class="content-center"
          rel="noreferrer"
        >
          <img
            alt="My Personal GitHub Stats"
            href="https://www.github.com/lukehagar"
            class="min-h-fit"
            src="https://raw.githubusercontent.com/lukehagar/github-stats/master/generated/overview.svg#gh-dark-mode-only"
          />
        </a>
        <a
          href="https://www.github.com/lukehagar"
          target="_blank"
          rel="noreferrer"
          class="content-center"
        >
          <img
            alt="My Personal GitHub Stats"
            href="https://www.github.com/lukehagar"
            class="min-h-fit"
            src="https://raw.githubusercontent.com/lukehagar/github-stats/master/generated/languages.svg#gh-dark-mode-only"
          />
        </a>
      </div>
      <div class="flex flex-row flex-wrap justify-center">
        <a
          href="https://www.github.com/luke-hagar-sp"
          target="_blank"
          rel="noreferrer"
          class="content-center"
        >
          <img
            alt="My Work GitHub Stats"
            class="min-h-fit"
            src="https://raw.githubusercontent.com/luke-hagar-sp/github-stats/master/generated/overview.svg#gh-dark-mode-only"
          />
        </a>
        <a
          href="https://www.github.com/luke-hagar-sp"
          target="_blank"
          rel="noreferrer"
          class="content-center"
        >
          <img
            alt="My Work GitHub Stats"
            class="min-h-fit"
            src="https://raw.githubusercontent.com/luke-hagar-sp/github-stats/master/generated/languages.svg#gh-dark-mode-only"
          />
        </a>
      </div>
    </div>
  </div>
</div>
