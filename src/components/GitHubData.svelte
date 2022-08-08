<script>
  import { each } from "svelte/internal";

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
      name: "LukeHagar.com",
      language: "Svelte",
      sources: [
        {
          name: "GitHub",
          repoUrl: "https://github.com/LukeHagar/LukeHagar.com",
        },
      ],
      localPath: "/lukehagar.com",
      description: "The source code for this website",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/LukeHagar.com",
      ],
    },
  ];
</script>

<div class="px-2 py-2">
  <div class="grid grid-cols-2 gap-4">
    {#each githubRepos as repo}
      <div
        class=" bg-gray-300 rounded-xl h-auto my-1 px-2 hover:bg-gray-200 flex-grow flex-shrink hover:-translate-y-5 hover:shadow-xl hover:border-2"
      >
        <a href={repo.localPath}>
          <div class="py-2">
            <div class="flex flex-row">
              <p>Project:</p>
              <a class="text-md px-2" href={repo.localPath}>{repo.name} </a>
            </div>
            <div class="flex flex-row">
              <p class="pr-2">Language:</p>
              {#if repo.language === "JavaScript"}
                <p class="text-md text-orange-400">
                  {repo.language}
                </p>
              {/if}
              {#if repo.language === "React.js"}
                <p class="text-md text-[#3391ff]">{repo.language}</p>
              {/if}
              {#if repo.language === "Svelte"}
                <p class="text-md text-[#ff511a]">{repo.language}</p>
              {/if}
            </div>
            <div class="flex flex-row">
              <p class="pr-2">Sources:</p>
              {#each repo.sources as source}
                <a
                  class="text-md underline text-blue-600 px-2"
                  href={source.repoUrl}>{source.name}</a
                >
              {/each}
            </div>

            <p class="text-black">{repo.description}</p>

            <div class="flex flex-row">
              {#each repo.images as imgSource}
                <div class="py-1 px-1">
                  <img alt="Repo Tags" src={imgSource} />
                </div>
              {/each}
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
