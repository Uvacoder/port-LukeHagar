<script>
  import { Avatar, Card, Divider } from "@brainandbones/skeleton";
  import title from "../stores/title";

  title.set("Home");
</script>

<svelte:head>
  <title>{$title}</title>
  <meta name="description" content="LukeHagar.com" />
</svelte:head>

<div class="flex flex-col content-center justify-center bg-transparent">
  <div class="flex flex-wrap justify-center ">
    <Avatar
      initials="LH"
      src="https://media-exp1.licdn.com/dms/image/C5603AQHP-ZFGPNDbBA/profile-displayphoto-shrink_800_800/0/1640206612663?e=1665619200&v=beta&t=Mhj3gWL9lfhBNk5oepXryDZ8gPpvZEkCK9VwQKHT2lM"
      size="3xl"
      background="bg-surface-500"
      outlined={true}
      hover={false}
    />
    <div class="flex flex-col pt-12 pl-6 ">
      <h1 class="text-center font-bold text-white ">Hey I'm Luke</h1>
      <p class="text-center ">And I enjoy making things.</p>
    </div>
  </div>
  <div class="flex flex-wrap  justify-center pt-4">
    <div class="flex flex-row flex-wrap justify-center">
      <a
        href="https://www.github.com/lukehagar"
        target="_blank"
        class="content-center"
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
