import React from 'react';
import {Helmet} from 'react-helmet-async';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './jacket1.jpg';

const useStyles = makeStyles({
    img: {
        height: 600,
        width: 500,
        margin: 30,
        float:'left',
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
    }
});

const title = 'Some random product';

function ProductPage()
{
    const classes = useStyles();
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
                <div align='center'>
                    <img src={img} alt="Lorem ipsum" className={classes.img}/>
                    <Grid item xs={6}>
                        <Typography variant={'body1'} className={classes.desc}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam purus leo, eget ultrices augue mollis non. Donec in nisi vel libero condimentum condimentum sed."
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Price: 20,00 <span className={classes.currency}>EUR.</span>
                        </Typography>
                    </Grid>
                </div>
            </Grid>
        </>
    );
}

export default ProductPage;