import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 'calc(100vh - 100px)',
  },
});

function LoadingCircle() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify={'center'} alignItems={'center'}>
      <CircularProgress />
    </Grid>
  );
}

export default LoadingCircle;
