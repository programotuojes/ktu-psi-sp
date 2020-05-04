import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img1 from './jacket1.jpg';
import img2 from './jumper.jpg';
import img3 from './shorts.jpg';
import { Button, InputLabel, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const photos = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
];

const useStyles = makeStyles({
  img: {
    height: 600,
    width: 500,
    margin: 30,
    float: 'left',
  },
  desc: {
    textAlign: 'center',
    padding: 20,
    paddingTop: 50,
  },

  currency: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: '32px',
  },
  flexboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexItem: {
    marginTop: 20,
  },
});

const title = 'Some random product';

function ProductPage() {
  const classes = useStyles();
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [state, setState] = React.useState({});
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Grid container-spacing={3}>
        <Grid item xs={12}>
          <Typography variant={'h4'} align={'center'} className={classes.text}>
            "Lorem ipsum"
          </Typography>
        </Grid>

        <div align="center">
          <ImageGallery items={photos} showPlayButton={false} />

          <Grid item xs={6}>
            <Typography variant={'body1'} className={classes.desc}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam purus
              leo, eget ultrices augue mollis non. Donec in nisi vel libero condimentum condimentum
              sed."
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={'h6'}>
              Price: 20,00 <span className={classes.currency}>EUR.</span>
            </Typography>
            <div className={classes.flexboxContainer}>
              <div className={classes.flexItem}>
                <InputLabel htmlFor="selectsize">Size</InputLabel>
                <Select
                  native
                  value={state.size}
                  onChange={handleChange}
                  inputProps={{
                    name: 'size',
                    id: 'selectsize',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </Select>
              </div>
              <div className={classes.flexItem}>
                <TextField
                  id="qty"
                  label="Quantity"
                  type="number"
                  defaultValue="1"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button className={classes.flexItem} variant="contained" color="primary">
                Į krepšelį
              </Button>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default ProductPage;
