/* eslint-disable max-len */

// @packages
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @styles
import { useStyles } from './styles';

const AboutMe = ({
  description,
  name,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.aboutMe}>
      <Card className={classes.aboutMeCard}>
        <Grid container direction="row">
          <Grid item lg={10} sm={10}>
            <CardContent>
              <Typography className={classes.title} variant="h5">
                {name}
              </Typography>
              <Typography color="textPrimary" variant="body1">
                {description}
              </Typography>
            </CardContent>

          </Grid>
          <Grid
            className={classes.avatarContainer}
            item
            lg={2}
            sm={2}
          >
            <CardMedia
              className={classes.avatar}
              image="https://avatars.githubusercontent.com/u/9467990?s=460&u=54508dd79ef1d321e2e62904e93c6d1e69dc80cd&v=4static/images/cards/live-from-space.jpg"
              title="avatar"
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

AboutMe.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AboutMe;
