// @packages
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// @configuration
import { configuration } from '../../configuration';

// @styles
import { useStyles } from './styles';

const BioPage = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.bioPage}
      container
      justify="center"
    >
      <Typography variant="h4">
        {configuration.language.mainMenu.bioPage}
      </Typography>
    </Grid>
  );
};

export default BioPage;
