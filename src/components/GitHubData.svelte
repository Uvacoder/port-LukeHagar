<script>
  import { Card } from "@brainandbones/skeleton";

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
      description: "A Electron/Web App for playing Plex Music on the Desktop",
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
        "A Node CLI tool to automatically parse and organie Sailpoint VA logs",
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

<div class="flex flex-wrap gap-4">
  {#each githubRepos.sort((a, b) => a.name.localeCompare(b.name)) as repo}
    <Card
      background="bg-white"
      color="text-black"
      class="my-1 px-2 shadow-xl grow"
    >
      <a href={repo.localPath}>
        <div class="py-2">
          <div class="flex flex-row justify-center">
            <p class="text-xl text-center">{repo.name}</p>
            <p class="text-xl text-center px-2">-</p>
            {#if repo.language === "JavaScript"}
              <p class="text-xl text-center text-[#f7df1e]">
                {repo.language}
              </p>
            {/if}
            {#if repo.language === "React.js"}
              <p class="text-xl text-center text-[#3391ff]">
                {repo.language}
              </p>
            {/if}
            {#if repo.language === "Svelte"}
              <p class="text-xl text-center text-[#ff511a]">
                {repo.language}
              </p>
            {/if}
          </div>
          <div class="flex flex-row justify-center">
            <p class="text-sm text-center">Sources:</p>
            <div class="flex flex-row flex-wrap justify-center">
              {#each repo.sources as source}
                <a
                  class="text-sm underline text-blue-600 px-2"
                  href={source.repoUrl}>{source.name}</a
                >
              {/each}
            </div>
          </div>

          <p class="text-black text-center">{repo.description}</p>

          <div class="flex flex-wrap justify-center">
            {#each repo.images as imgSource}
              <div class="py-1 px-1">
                <img alt="Repo Tags" src={imgSource} />
              </div>
            {/each}
          </div>
        </div>
      </a>
    </Card>
  {/each}
</div>
