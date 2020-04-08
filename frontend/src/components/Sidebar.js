import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { selectCategory, toggleSidebar } from '../store/actions/sidebar';
import { Toolbar } from '@material-ui/core';
import { isSidebarOpen } from '../store/selectors/sidebar';
import { CATEGORIES } from '../constants';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function Sidebar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector(isSidebarOpen);

  return (
    <Drawer open={open} onClose={() => dispatch(toggleSidebar(false))}>
      <Toolbar />

      <List className={classes.list}>
        <ListItem
          button
          key={CATEGORIES[0]}
          onClick={() => dispatch(selectCategory(CATEGORIES[0]))}
        >
          <ListItemText primary={CATEGORIES[0]} />
        </ListItem>

        <Divider />

        {CATEGORIES.slice(1).map((category) => (
          <ListItem button key={category} onClick={() => dispatch(selectCategory(category))}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
