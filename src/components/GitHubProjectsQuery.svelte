<script>
  import Axios from "axios";

  let githubRateLimitExceeded = false;
  let githubAccount = { login: "No GitHub User Data Retrieved" };
  let loading = false;
  /**
   * @type {any[]}
   */
  let githubRepos = [];

  /**
   * @param {string} username
   */
  async function GetGitHubAccounts(username) {
    const response = await Axios({
      url: `https://api.github.com/users/${username}`,
    }).catch((e) => {
      return e;
    });
    if (response.request.status === 403) {
      githubRateLimitExceeded = true;
      loading = false;
    }
    return response.data;
  }

  /**
   * @param {string} username
   */
  async function GetGitHubRepos(username) {
    const response = await Axios({
      url: `https://api.github.com/users/${username}/repos`,
    }).catch((e) => {
      return e;
    });
    if (response.request.status === 403) {
      githubRateLimitExceeded = true;
      loading = false;
    }
    return response.data;
  }

  async function loadGitHubData() {
    loading = true;
    githubAccount = await GetGitHubAccounts("lukehagar");
    githubRepos = await GetGitHubRepos("lukehagar");
    loading = false;
  }
</script>

<div class="h-12 bg-gray-400 justify-center">
  <button
    class="rounded-md w-30 h-12 bg-slate-500"
    on:click={() => loadGitHubData()}
  >
    <p class="m-2">Load GitHub Account Data</p>
  </button>
</div>

{#if githubRateLimitExceeded === true}
  <div class="text-xl text-center">Your GitHub Rate Limit is Exceeded</div>
  <div style="width:100%;height:0;padding-bottom:65%;position:relative;">
    <iframe
      title="Uh Uh Uh you didnt say the magic word"
      src="https://giphy.com/embed/3ohzdQ1IynzclJldUQ"
      width="100%"
      height="100%"
      style="position:absolute"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    />
  </div>
{/if}

{#if githubRateLimitExceeded === false}
  {#if loading === false}
    <div>
      <p>{githubAccount.login}</p>
    </div>
    {#each githubRepos as repo}
      <div class="m-4 bg-gray-200 rounded-lg">
        <div class="m-2">
          <a class="underline text-blue-700 text-sm " href={repo.repoURL}
            >{repo.name}
          </a>
          <p class="text-black">{repo.description}</p>
        </div>
      </div>
    {/each}
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/if}
{/if}
