// @packages
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

// @configuration
import { configuration } from '../../../configuration';

// @styles
import { useStyles } from './styles';

// @constants
const ICON_TYPES = {
  fontAwesome: 'fontAwesome',
  materialIcon: 'materialIcon',
};

const MainMenu = ({
  anchor,
  variant,
}) => {
  const [isMenuOpen, setMenuVisibility] = useState(true);
  const toggleMenu = () => setMenuVisibility(!isMenuOpen);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleMenuItemClick = (path) => history.push(path);

  const renderMenuItemIcon = (icon, type) => {
    const className = type === ICON_TYPES.fontAwesome ? icon : null;
    const iconSource = type === ICON_TYPES.materialIcon ? icon : null;

    return (
      <Icon className={classNames(className, classes.menuItemIcon)}>
        {iconSource}
      </Icon>
    );
  };

  const renderMenu = () => configuration.mainMenu
    .filter((item) => !item.isExcluded)
    .sort((a, b) => (a.index - b.index))
    .map((item, index) => {
      const menuItemClass = item.path.substring(1);

      return (
        <ListItem
          button
          className={classes[`menuItem_${menuItemClass}`]}
          classes={{ selected: classes[`menuItemSelected_${menuItemClass}`] }}
          key={`${item.name}-${index}`}
          onClick={() => handleMenuItemClick(item.path)}
          selected={location.pathname === item.path}
        >
            <ListItemIcon>
              {renderMenuItemIcon(item.icon, item.iconType)}
            </ListItemIcon>
            <ListItemText className={classes.menuItemLabel} primary={item.label} />
        </ListItem>
      );
    });

  return (
    <Drawer
      ModalProps={{ keepMounted: true }}
      anchor={anchor}
      classes={{ paper: classes.root }}
      onClose={toggleMenu}
      open={isMenuOpen}
      variant={variant}
    >
      <List disablePadding>
        {renderMenu()}
      </List>
    </Drawer>
  );
};

MainMenu.propTypes = {
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};

MainMenu.defaultProps = {
  anchor: 'left',
  variant: 'persistent',
};

export default MainMenu;
