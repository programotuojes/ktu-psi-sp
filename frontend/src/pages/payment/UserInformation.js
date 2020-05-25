import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  errorMessage: {
    color: '#D8000C',
  },
}));

const validate = (values) => {
  const errors = {};

  if (!values.firstName) errors.firstName = 'Privalomas laukas';
  else if (!(values.firstName.length > 2 && values.firstName.length < 50)) {
    errors.firstName = 'Vardas turi būti tarp 2 ir 50 simbolių';
  }

  if (!values.lastName) errors.lastName = 'Privalomas laukas';
  else if (!(values.lastName.length > 2 && values.lastName.length < 50)) {
    errors.lastName = 'Pavardė turi būti tarp 2 ir 50 simbolių';
  }

  if (
    values.email.trim() &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())
  ) {
    errors.email = 'Netinkamas el-paštas';
  }

  if (!values.city) errors.city = 'Privalomas laukas';

  if (!values.address) errors.address = 'Privalomas laukas';

  if (!values.phone) errors.phone = 'Privalomas laukas';
  else if (!/(86|\+3706)\d{7}$/.test(values.phone)) {
    errors.phone = 'Netinkamas telefono numerio formatas';
  }

  return errors;
};

export default function UserInformation() {
  const classes = useStyles();

  //Initialize formik with default values
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      phone: '',
    },
    validate,
    //Called after you click on Submit button below
    onSubmit: (values) => {
      //do something with values
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.root} autoComplete="off">
        <div>
          <div>
            <div>
              <TextField
                className={classes.textField}
                id="firstName"
                label="Vardas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className={classes.errorMessage}>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div>
              <TextField
                className={classes.textField}
                id="lastName"
                label="Pavardė"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className={classes.errorMessage}>{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div>
              <TextField
                className={classes.textField}
                id="email"
                label="El.paštas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={classes.errorMessage}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <TextField
                className={classes.textField}
                id="city"
                label="Miestas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className={classes.errorMessage}>{formik.errors.city}</div>
              ) : null}
            </div>

            <div>
              <TextField
                className={classes.textField}
                id="address"
                label="Adresas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className={classes.errorMessage}>{formik.errors.address}</div>
              ) : null}
            </div>

            <div>
              <TextField
                className={classes.textField}
                id="phone"
                label="Telefonas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={classes.errorMessage}>{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
        </div>
        <Grid container>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              url={'/payment/confirmation'}
              style={{ width: '50%' }}
            >
              APMOKĖTI
            </Button>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </form>
    </>
  );
}
