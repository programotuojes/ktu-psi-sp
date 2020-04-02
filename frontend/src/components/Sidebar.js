import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { toggleSidebar } from '../store/actions/sidebar';
import { Toolbar } from '@material-ui/core';
import { isSidebarOpen } from '../store/selectors/sidebar';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function Sidebar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector(isSidebarOpen);

  function list() {
    return (
      <List className={classes.list}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <Drawer open={open} onClose={() => dispatch(toggleSidebar(false))}>
      <Toolbar />
      {list()}
    </Drawer>
  );
}

export default Sidebar;
