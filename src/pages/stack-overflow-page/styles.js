// @packages
import { makeStyles } from '@material-ui/core/styles';

// @styles
import { dimensions } from '../../styles';

export const useStyles = makeStyles((theme) => ({
  stackOverflowPage: {
    backgroundColor: theme.palette.custom.black.main,
    color: theme.palette.custom.white.light,
    height: '100vh',
    marginLeft: dimensions.mainMenu.width,
    paddingTop: 25,
    width: `calc(100% - ${dimensions.mainMenu.width}px)`,
  }
}));
