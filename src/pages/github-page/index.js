// @packages
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';

// @actions
import { getGithubUser } from '../../store';

// @configuration
import { configuration } from '../../configuration';

// @styles
import { useStyles } from './styles';

const GitHubPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getGithubUser(process.env.REACT_APP_GITHUB_USERNAME));
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
    </Grid>
  );
};

export default GitHubPage;
