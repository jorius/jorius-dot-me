// @packages
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  languageTags: {
    marginTop: 5,
  },
  languageTag: {
    marginRight: 5,
  },
  githubRepo: {
    backgroundColor: theme.palette.custom.white.main,
    boxShadow: `2px 5px 10px 4px ${theme.palette.custom.black.dark}`,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
}));
