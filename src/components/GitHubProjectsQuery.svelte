<script>
  import Axios from "axios";

  /**
   * @param {string} username
   */
  async function GetGitHubProjects(username) {
    let response = await Axios({
      url: `https://api.github.com/users/${username}`,
    }).catch((e) => console.error(e));
    return response;
  }

  let githubAccount = GetGitHubProjects("lukehagar");

  console.log(githubAccount);
</script>
