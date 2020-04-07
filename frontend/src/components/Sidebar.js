import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { toggleSidebar } from '../store/actions/sidebar';
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

  const categories = Object.values(CATEGORIES);
  const open = useSelector(isSidebarOpen);

  return (
    <Drawer open={open} onClose={() => dispatch(toggleSidebar(false))}>
      <Toolbar />

      <List className={classes.list}>
        <ListItem button key={categories[0]}>
          <ListItemText primary={categories[0]} />
        </ListItem>

        <Divider />

        {categories.slice(1, -1).map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
