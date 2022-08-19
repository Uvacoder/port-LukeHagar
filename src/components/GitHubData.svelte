<script>
  import { Button, Card } from "@brainandbones/skeleton";

  let githubRepos = [
    {
      name: "Warden",
      language: "React.js",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/Warden",
        },
      ],
      localPath: "/warden",
      description: "A Electron App for Plex Music",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/Warden",
      ],
    },
    {
      name: "plex-api-oauth",
      language: "JavaScript",
      localPath: "/plex-api-oauth",
      description: "An NPM Module for the Plex.TV API, now with OAuth",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/plex-api-oauth",
        },
        {
          name: "npmjs",
          repoUrl: "https://www.npmjs.com/package/plex-api-oauth",
        },
      ],
      images: [
        "https://img.shields.io/npm/dw/plex-api-oauth",
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/plex-api-oauth",
      ],
    },
    {
      name: "Anchor",
      language: "React.js",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/Anchor",
        },
        {
          name: "Chrome Web Store",
          repoUrl:
            "https://chrome.google.com/webstore/detail/anchor/opooagfnjoclbafkbgeeokllilaepiap",
        },
      ],
      localPath: "/anchor",
      description:
        "A Chrome Extension developed for SailPoint's IdentityNow SaaS Application",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/Anchor",
      ],
    },
    {
      name: "VA-Log-Parser",
      language: "JavaScript",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/VA-Log-Parser",
        },
      ],
      localPath: "/va-log-parser",
      description:
        "A Node CLI tool to automatically parse and organize Sailpoint VA logs",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/Anchor",
      ],
    },
    {
      name: "LukeHagar.com",
      language: "Svelte",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/LukeHagar.com",
        },
      ],
      localPath: "https://github.com/LukeHagar/LukeHagar.com",
      description: "The source code for this website",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/LukeHagar.com",
      ],
    },
  ];
</script>

<div class="flex flex-auto flex-wrap gap-4">
  {#each githubRepos.sort((a, b) => a.name.localeCompare(b.name)) as repo}
    <Button
      background="bg-white"
      color="text-black"
      class="my-1 grow shadow-2xl"
      href={repo.localPath}
      target="_blank"
    >
      <div class="flex flex-row justify-center">
        <p class="text-center text-xl">{repo.name}</p>
        <p class="px-2 text-center text-xl">-</p>
        {#if repo.language === "JavaScript"}
          <p class="text-center text-xl text-[#f7df1e]">
            {repo.language}
          </p>
        {/if}
        {#if repo.language === "React.js"}
          <p class="text-center text-xl text-[#3391ff]">
            {repo.language}
          </p>
        {/if}
        {#if repo.language === "Svelte"}
          <p class="text-center text-xl text-[#ff511a]">
            {repo.language}
          </p>
        {/if}
      </div>
      <div class="flex flex-row justify-center">
        <p class="text-center text-sm">Sources:</p>
        <div class="flex flex-row flex-wrap justify-center">
          {#each repo.sources as source}
            <a
              class="px-2 text-sm text-blue-600 underline"
              href={source.repoUrl}
              target="_blank"
            >
              {source.name}
            </a>
          {/each}
        </div>
      </div>

      <p class="text-center text-black">{repo.description}</p>

      <div class="flex flex-wrap justify-center">
        {#each repo.images as imgSource}
          <div class="py-1 px-1">
            <img alt="Repo Tags" src={imgSource} />
          </div>
        {/each}
      </div>
    </Button>
  {/each}
</div>
