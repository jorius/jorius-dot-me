// @packages
import axios from 'axios';

// @core
import { configuration } from '../../configuration';

// @utils
import { parseStringParams } from '../../utils';

// @constants
export const GET_GITHUB_USER_REPOS = 'GET_GITHUB_USER_REPOS';
export const GET_GITHUB_USER_REPOS_FAILED = 'GET_GITHUB_USER_REPOS_FAILED';

// One request per page view. The repository list already carries each
// repository's primary language; the old per-repository languages calls cost
// one request each against GitHub's 60-per-hour unauthenticated budget, so a
// handful of visits from one network emptied it and the list came back blank.
export const getGithubUserRepos = (userName) => (dispatch) =>
  axios.get(parseStringParams(configuration.services.github.repos, userName))
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
