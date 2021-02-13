// @packages
import { makeStyles } from '@material-ui/core/styles';

// @styles
import { dimensions } from '../../../styles';

const commonMenuItemStyles = {
  paddingBottom: 25,
  paddingTop: 25,
};

// @utils
const createMenuItemHoverStyles = (backgroundColor, color) => ({
  '&:hover': {
    // TODO: Refactor this kind of implementation.
    '&>.MuiListItemIcon-root': {
      color,
    },
    backgroundColor,
    color,
  },
});

const createMenuItemSelectedStyles = (backgroundColor, color) => ({
  // TODO: Refactor this kind of implementation.
  '&>.MuiListItemIcon-root': {
    color,
  },
  // TODO: Refactor this kind of implementation.
  backgroundColor: `${backgroundColor} !important`,
  color,
});

export const useStyles = makeStyles((theme) => ({
  menuItem_bio: {
    ...createMenuItemHoverStyles(theme.palette.custom.yellow.dark, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_contact: {
    ...createMenuItemHoverStyles(theme.palette.custom.blue.dark, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_home: {
    ...createMenuItemHoverStyles(theme.palette.custom.black.dark, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_github: {
    ...createMenuItemHoverStyles(theme.palette.custom.blue.main, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_npm: {
    ...createMenuItemHoverStyles(theme.palette.custom.red.main, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_settings: {
    ...createMenuItemHoverStyles(theme.palette.custom.grey.main, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItem_stackoverflow: {
    ...createMenuItemHoverStyles(theme.palette.custom.orange.main, theme.palette.custom.white.light),
    ...commonMenuItemStyles,
  },
  menuItemSelected_bio: {
    ...createMenuItemSelectedStyles(theme.palette.custom.yellow.dark, theme.palette.custom.white.light),
  },
  menuItemSelected_contact: {
    ...createMenuItemSelectedStyles(theme.palette.custom.blue.dark, theme.palette.custom.white.light),
  },
  menuItemSelected_home: {
    ...createMenuItemSelectedStyles(theme.palette.custom.black.dark, theme.palette.custom.white.light),
  },
  menuItemSelected_github: {
    ...createMenuItemSelectedStyles(theme.palette.custom.blue.main, theme.palette.custom.white.light),
  },
  menuItemSelected_npm: {
    ...createMenuItemSelectedStyles(theme.palette.custom.red.main, theme.palette.custom.white.light),
  },
  menuItemSelected_settings: {
    ...createMenuItemSelectedStyles(theme.palette.custom.grey.main, theme.palette.custom.white.light),
  },
  menuItemSelected_stackoverflow: {
    ...createMenuItemSelectedStyles(theme.palette.custom.orange.main, theme.palette.custom.white.light),
  },
  menuItemIcon: {
    width: '2em',
  },
  menuItemLabel: {
    fontWeight: 'bold',
  },
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    borderRight: 'unset',
    width: dimensions.mainMenu.width,
  }
}));
