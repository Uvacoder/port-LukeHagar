<script>
  let githubRepos = [
    {
      name: "Warden",
      language: "React.js",
      repoUrl: "https://github.com/LukeHagar/Warden",
      localPath: "/plex-api-oauth",
      description: "A Local/Web App for playing Plex Music on the Desktop",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/Warden",
      ],
    },
    {
      name: "plex-api-oauth",
      language: "JavaScript",
      repoUrl: "https://github.com/LukeHagar/plex-api-oauth",
      localPath: "/plex-api-oauth",
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
      localPath: "/plex-api-oauth",
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
      localPath: "/plex-api-oauth",
      description: "My Website Repo",
      images: [
        "https://img.shields.io/lgtm/grade/javascript/github/LukeHagar/LukeHagar.com",
      ],
    },
  ];
</script>

<div class="px-2 py-2">
  {#each githubRepos as repo}
    <div
      class=" bg-gray-200 rounded-lg h-auto my-2 px-2 relative hover:bg-gray-300"
    >
      <div class="flex flex-row">
        <p>Project:</p>
        <a class=" underline text-md px-2" href={repo.localPath}
          >{repo.name}
        </a>
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
        <a class="text-md underline text-blue-600 px-2" href={repo.repoUrl}
          >Github Repo</a
        >
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
  {/each}
</div>
