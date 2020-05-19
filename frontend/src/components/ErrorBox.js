import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
  },
  paper: {
    padding: 16,
    maxWidth: 400,
    background: '#ef9a9a',
  },
  button: {
    marginTop: 30,
    background: '#e57373',
  },
});

function ErrorBox({ message }) {
  const classes = useStyles();
  const history = useHistory();

  document.title = 'Prekė nerasta';

  return (
    <Grid container justify={'center'} className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Grid container direction={'column'}>
          <Typography>{message}</Typography>

          <Grid container item justify={'center'}>
            <Button
              onClick={() => history.goBack()}
              variant={'outlined'}
              className={classes.button}
            >
              Grįžti atgal
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ErrorBox;
