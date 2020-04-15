import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  errorMessage: {
    color: 'red',
  },
}));

const validate = (values) => {
  const errors = {};

  if (!values.firstName);
  else if (!(values.firstName.length > 2 && values.firstName.length < 50)) {
    errors.firstName = 'Vardas turi būti tarp 2 ir 50 simbolių';
  }

  if (!values.firstName);
  else if (!(values.lastName.length > 2 && values.lastName.length < 50)) {
    errors.lastName = 'Pavardė turi būti tarp 2 ir 50 simbolių';
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Netinkamas el-paštas';
  }

  if (!values.phone);
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
                required
                id="firstName"
                label="Vardas"
                defaultValue=""
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
                required
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
                defaultValue=""
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
                required
                id="adress"
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
                id="phone"
                label="Telefonas"
                defaultValue=""
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
        <button type="submit">Tęsti</button>
      </form>
    </>
  );
}
