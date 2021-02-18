// @packages
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// @styles
import { useStyles } from './styles';

const GithubRepo = ({
  description,
  // language,
  languages,
  name,
  url,
}) => {
  const classes = useStyles();

  const renderLanguagesTags = () => languages.map((lang) => (
    <Chip
      className={classes.languageTag}
      color="primary"
      label={lang}
    />
  ));

  return (
    <Card className={classes.githubRepo}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          <Link href={url}>{name}</Link>
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
        <Grid className={classes.languageTags}>
          {renderLanguagesTags()}
        </Grid>
      </CardContent>
    </Card>
  );
};

GithubRepo.propTypes = {
  description: PropTypes.string,
  // language: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GithubRepo.defaultProps = {
  description: null,
  // language: null,
};

export default GithubRepo;
