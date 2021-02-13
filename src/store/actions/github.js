// @packages
import axios from 'axios';

// @core
import { configuration } from '../../configuration';

// @utils
import { parseStringParams } from '../../utils';

// @constants
export const GET_GITHUB_USER = 'GET_GITHUB_USER';

export const getGithubUser = (userName) => (dispatch) =>
  axios.get(parseStringParams(configuration.services.github.user, userName))
    .then((response) => dispatch({
      payload: { user: response },
      type: GET_GITHUB_USER,
    }))
    .catch(Promise.reject);
