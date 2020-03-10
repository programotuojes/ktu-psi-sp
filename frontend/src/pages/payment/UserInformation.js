import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
export default function UserInformation() {
  const classes = useStyles();

  return (
    <>
      <h2>Pirkėjo informacija</h2>
      <form className={classes.root} autoComplete="off">
        <div>
          <div>
            <TextField
              className={classes.textField}
              required
              id="Vardas"
              label="Vardas"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              required
              id="Pavarde"
              label="Pavardė"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              id="El.pastas"
              label="El.paštas"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              required
              id="Adresas"
              label="Adresas"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              required
              id="Miestas"
              label="Miestas"
              defaultValue=""
            />
          </div>
          <div>
            <TextField
              className={classes.textField}
              required
              id="Telefonas"
              label="Telefonas"
              defaultValue=""
            />
          </div>
        </div>
      </form>
    </>
  );
}
