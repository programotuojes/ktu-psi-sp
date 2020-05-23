import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logoblack.png';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import fourth from './fourth.jpg';
import fifth from './fifth.jpg';

const title = 'The Wall - Apie';

const useStyles = makeStyles({
  container: {
    marginTop: '50px',
  },
  gridContainer: {
    marginTop: '80px',
  },
  headers: {
    marginTop: '50px',
    textAlign: 'center',
    paddingBottom: '15px',
    borderBottom: '2px black ridge',
    paddingTop: '15px',
    borderTop: '2px black ridge',
  },
  images: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

function About() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container alignItems="center" justify="center" spacing={0}>
          <Grid item xs={12}>
            <img src={logo} className={classes.images} alt={'logo'} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.headers}>
              THE WALL - VILKĖK MENĄ
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        alignItems="center"
        spacing={0}
        justify="center"
        className={classes.gridContainer}
      >
        <Grid item sm={4}>
          <img src={first} className={classes.images} style={{ width: '100%' }} alt={'first'} />
        </Grid>
        <Grid item sm={4}>
          <img src={second} className={classes.images} style={{ width: '100%' }} alt={'second'} />
        </Grid>
        <Grid item sm={4}>
          <img src={third} className={classes.images} style={{ width: '100%' }} alt={'third'} />
        </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container alignItems="center" justify="center" spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.headers}>
              THE WALL - IŠ NAUJO APIBRĖŽTAS TIPIŠKO LIETUVIO STEREOTIPAS PASINAUDOJANT GATVĖS MENO
              GALIA
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        alignItems="center"
        spacing={0}
        justify="center"
        className={classes.gridContainer}
      >
        <Grid item sm={6}>
          <img src={fourth} className={classes.images} style={{ width: '100%' }} alt={'fourth'} />
        </Grid>
        <Grid item sm={6}>
          <img src={fifth} className={classes.images} style={{ width: '100%' }} alt={'fifth'} />
        </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.gridContainer}>
        <Grid container alignItems="center" justify="center" spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.headers}>
              ŽMONĖS KURIE KŪRĖ ŠĮ PUSLAPĮ
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ marginTop: '50px' }}>
            <Typography variant="h5">
              Jokūbas Keturakis - programų sistemos, 2 kursas <br />
              Vaiva Vaidilaitė - programų sistemos, 2 kursas <br />
              Beatričė Čėplaitė - programų sistemos, 2 kursas
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ marginTop: '50px' }}>
            <Typography variant="h5">
              Gustas Klevinskas - programų sistemos, 2 kursas <br />
              Lukas Arlauskas - programų sistemos, 2 kursas
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
