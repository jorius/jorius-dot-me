// @packages
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { getGithubUserRepos } from '../../store';

// @components
import GithubRepo from '../../components/commons/github-repo';

// @configuration
import { configuration } from '../../configuration';

// @styles
import { useStyles } from './styles';

const GitHubPage = () => {
  const dispatch = useDispatch();
  const { repos } = useSelector((state) => state.github);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getGithubUserRepos(process.env.REACT_APP_GITHUB_USERNAME));
  }, []);

  return (
    <Grid
      className={classes.githubPage}
      container
      justify="center"
    >
      <Typography variant="h4">
        {configuration.language.mainMenu.githubPage}
      </Typography>
      <Grid container direction="column">
        {repos.map((repo) => (
          <Grid className={classes.githubRepoContainer} key={repo.id} item>
            <GithubRepo {...repo} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GitHubPage;
