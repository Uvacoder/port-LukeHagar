<script>
  import {
    GetGitHubAccounts,
    GetGitHubRepos,
  } from "../services/GitHubQueries.svelte";

  let githubRateLimitExceeded = false;
  let githubAccount = {
    login: "",
    avatar_url: "",
    githubRateLimitExceeded: false,
  };
  let loading = false;
  let githubRepos = [];

  async function loadGitHubData() {
    loading = true;
    githubAccount = await GetGitHubAccounts("lukehagar").catch((e) => {
      githubRateLimitExceeded = true;
      console.log(e);
    });
    githubRepos = await GetGitHubRepos("lukehagar").catch((e) => {
      githubRateLimitExceeded = true;
      console.log(e);
    });
    loading = false;
    console.log(githubAccount);
    console.log(githubRepos);
    console.log(githubRateLimitExceeded);
    if (githubRateLimitExceeded == true) {
      githubRepos = [
        {
          name: "Warden",
          language: "React.js",
          repoUrl: "https://github.com/LukeHagar/Warden",
          description: "A Local/Web App for playing Plex Music on the Desktop",
          images: [],
        },
        {
          name: "plex-api-oauth",
          language: "JavaScript",
          repoUrl: "https://github.com/LukeHagar/plex-api-oauth",
          description:
            "An NPM Module designed to make Plex Media Server and plex.tv API calls easier to implement in JavaScript and React projects",
          images: [
            "https://img.shields.io/npm/dw/plex-api-oauth",
            "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/plex-api-oauth",
          ],
        },
        {
          name: "Anchor",
          language: "React.js",
          repoUrl: "https://github.com/LukeHagar/Anchor",
          description:
            "A Chrome Extension developed for customers to aid in use and support of IdentityNow",
          images: [
            "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/Anchor",
          ],
        },
        {
          name: "LukeHagar.com",
          language: "Svelte",
          repoUrl: "https://github.com/LukeHagar/LukeHagar.com",
          description: "My Website Repo",
          images: [],
        },
      ];
    }
    console.log(githubRepos);
  }

  loadGitHubData();
</script>

<div class="px-2 py-2">
  <p class="text-xl ml-4 text-white">GitHub Repos:</p>
  {#if loading === false}
    {#each githubRepos as repo}
      <div class=" bg-gray-200 rounded-lg h-auto my-2 px-2 relative">
        <div class="m-1">
          <a class="underline text-blue-700 text-lg" href={repo.repoUrl}
            >{repo.name}
          </a>
          {#if repo.language === "JavaScript"}
            <p class="text-md text-orange-400">{repo.language}</p>
          {/if}
          {#if repo.language === "React.js"}
            <p class="text-md text-[#3391ff]">{repo.language}</p>
          {/if}
          {#if repo.language === "Svelte"}
            <p class="text-md text-[#ff511a]">{repo.language}</p>
          {/if}

          <p class="text-black">{repo.description}</p>
          <a class="text-xs" href={repo.repoUrl}>{repo.repoUrl}</a>

          {#each repo.images as imgSource}
            <div class="py-1 px-1">
              <img loading="lazy" alt="Repo Tags" src={imgSource} />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {:else}
    <!-- this block renders when githubRepos.length === 0 -->
    <p>Loading...</p>
  {/if}
</div>
