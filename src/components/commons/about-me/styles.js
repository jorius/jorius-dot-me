// @packages
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  aboutMe: {
    padding: 25,
  },
  avatarContainer: {
    paddingBottom: 25,
    paddingTop: 25,
  },
  avatar: {
    height: 230,
    width: 230,
  },
  aboutMeCard: {
    backgroundColor: theme.palette.custom.white.main,
    boxShadow: `2px 5px 10px 4px ${theme.palette.custom.black.dark}`,
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 25,
  },
}));
