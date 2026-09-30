// @packages
import axios from 'axios';

// @constants
export const GET_GITHUB_USER_REPOS = 'GET_GITHUB_USER_REPOS';
export const GET_GITHUB_USER_REPOS_FAILED = 'GET_GITHUB_USER_REPOS_FAILED';

// The list is a static snapshot written by the deploy workflow (public/repos.json),
// so a page view makes no GitHub API call at all: the unauthenticated limit of 60
// requests per hour per network used to blank the list after a few visits.
export const getGithubUserRepos = () => (dispatch) =>
  axios.get(`${process.env.PUBLIC_URL}/repos.json`)
    .then((response) => {
      const repos = response.map((repo) => ({
        defaultBranch: repo.default_branch,
        description: repo.description,
        id: repo.id,
        language: repo.language,
        languages: repo.language ? [repo.language] : [],
        name: repo.name,
        url: repo.html_url,
      }));

      dispatch({
        payload: { repos },
        type: GET_GITHUB_USER_REPOS,
      });
    })
    .catch(() => dispatch({ type: GET_GITHUB_USER_REPOS_FAILED }));
