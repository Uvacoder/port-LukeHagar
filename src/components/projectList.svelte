<script>
  import GitHubProjectsQuery from "../components/GitHubProjectsQuery.svelte";
  let projects = [
    {
      projectName: "Warden",
      description:
        "A music player written in react that interacts with the Plex.TV web API as well as local and relay connections for plex Servers",
      projectURL: "https://github.com/LukeHagar/Warden",
    },
    {
      projectName: "plex-api-oauth",
      description:
        "An NPM Module designed to make Plex Media Server and plex.tv API calls easier to implement in JavaScript and React projects",
      projectURL: "https://github.com/LukeHagar/plex-api-oauth",
    },
    {
      projectName: "Anchor",
      description:
        "A Chrome Extension developed for customers to aid in use and support of Sailpoints IdentityNow Application",
      projectURL: "https://github.com/LukeHagar/Anchor",
    },
    {
      projectName: "LukeHagar.com",
      description: "My Website Repo",
      projectURL: "https://github.com/LukeHagar/LukeHagar.com",
    },
  ];
</script>

<GitHubProjectsQuery />

{#each projects as project}
  <div class="m-4 bg-gray-200 rounded-lg">
    <div class="m-2">
      <a class="underline text-blue-700 text-sm " href={project.projectURL}
        >{project.projectName}
      </a>
      <p class="text-black">{project.description}</p>
    </div>
  </div>
{/each}
