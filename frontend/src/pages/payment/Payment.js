import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserInformation from './UserInformation';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Container, Typography } from '@material-ui/core';

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
const title = 'The Wall - Apmokėjimas';

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

      <Container>
        <Grid container className={classes.root} style={{ marginTop: '10px' }}>
          <Grid item xs={6} style={{ border: '5px ridge' }}>
            <div className={classes.title}>Pirkėjo informacija</div>
            <UserInformation price={'15.00'} />
          </Grid>
          <Grid item container xs={6} style={{}}>
            <Grid item xs={12} style={{ border: '5px ridge', marginLeft: '10px' }}>
              <div className={classes.title}>Pristatymo būdas</div>
              <RadioGroup
                style={{ marginLeft: '16px' }}
                name="delivery"
                value={valueDelivery}
                onChange={handleChangeDelivery}
              >
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
            <Grid item xs={12} style={{ border: '5px ridge', marginLeft: '10px' }}>
              <div className={classes.title}>Mokėjimo būdas</div>
              <RadioGroup
                style={{ marginLeft: '16px' }}
                name="payment"
                value={valuePayment}
                onChange={handleChangePayment}
              >
                <FormControlLabel value="paysera" control={<Radio />} label="Paysera" />
                <FormControlLabel value="card" control={<Radio />} label="Mokėjimas kortele" />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h4" style={{ fontFamily: 'roboto' }}>
          SUMA: 15 EUR.
        </Typography>
      </Container>
    </>
  );
}

export default Payment;
