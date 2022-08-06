<script context="module">
  import Axios from "axios";

  /**
   * @param {string} username
   */
  export async function GetGitHubAccounts(username) {
    const response = await Axios({
      url: `https://api.github.com/users/${username}`,
    }).catch((e) => {
      throw e;
    });
    return response.data;
  }

  /**
   * @param {string} username
   */
  export async function GetGitHubRepos(username) {
    const response = await Axios({
      url: `https://api.github.com/users/${username}/repos`,
    }).catch((e) => {
      throw e;
    });
    return response.data;
  }
</script>
