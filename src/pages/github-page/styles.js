// @packages
import { makeStyles } from '@material-ui/core/styles';

// @styles
import { dimensions } from '../../styles';

export const useStyles = makeStyles((theme) => ({
  githubPage: {
    backgroundColor: theme.palette.custom.black.main,
    color: theme.palette.custom.white.light,
    height: '100vh',
    marginLeft: dimensions.mainMenu.width,
    overflow: 'auto',
    paddingTop: 25,
    width: `calc(100% - ${dimensions.mainMenu.width}px)`,
  },
  githubRepoContainer: {
    padding: 25,
  },
}));
