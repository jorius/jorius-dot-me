// @packages
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @configuration
import { configuration } from '../../configuration';

// @styles
import { useStyles } from './styles';

const NpmPage = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.npmPage}
      container
      justify="center"
    >
      <Typography variant="h4">
        {configuration.language.mainMenu.npmPage}
      </Typography>
    </Grid>
  );
};

export default NpmPage;
