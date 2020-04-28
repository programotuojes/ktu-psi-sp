import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserInformation from './UserInformation';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: '1.8em',
    margin: '16px',
    fontStyle: 'bold',
    textAlign: 'left',
  },
});
const title = 'Payment';

function Payment() {
  const classes = useStyles();
  const [valueDelivery, setValue] = React.useState('shop');
  const [valuePayment, setValuePayment] = React.useState('paysera');

  const handleChangeDelivery = (event) => {
    setValue(event.target.value);
  };

  const handleChangePayment = (event) => {
    setValuePayment(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Grid container className={classes.root} cols={3}>
        <Grid item xs>
          <div className={classes.title}>Pirkėjo informacija</div>
          <UserInformation />
        </Grid>
        <Grid item xs>
          <div className={classes.title}>Pristatymo būdas</div>
          <RadioGroup name="delivery" value={valueDelivery} onChange={handleChangeDelivery}>
            <FormControlLabel
              value="shop"
              control={<Radio />}
              label="Nemokamas atsiėmimas parduotuvėje. Rotušės a.15 Kaunas"
            />
            <FormControlLabel
              value="courier"
              control={<Radio />}
              label="Pristatymas į namus per kurjerio tarnybą. Kaina 2.5€"
            />
            <FormControlLabel
              value="postOffice"
              control={<Radio />}
              label="Atsiėmimas Lietuvos pašto skyriuje. Kaina 2.2€"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs>
          <div className={classes.title}>Mokėjimo būdas</div>
          <RadioGroup name="payment" value={valuePayment} onChange={handleChangePayment}>
            <FormControlLabel value="paysera" control={<Radio />} label="Paysera" />
            <FormControlLabel value="card" control={<Radio />} label="Mokėjimas kortele" />
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default Payment;
