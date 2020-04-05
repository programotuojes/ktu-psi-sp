import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from './jacket1.jpg';

const useStyles = makeStyles({
    img: {
        height: 600,
        width: 500,
        margin: 5,
    },
    desc: {
        textAlign: 'center',
        padding: 20,
        paddingTop: 50,
    },
    float: {
        margin: 30,
        float:'left',
    },
    currency: {
        fontWeight: 'bold',
        color: 'blue',
    },
    cardContent: {
        paddingTop: 8,
        '&:last-child': {
            paddingBottom: 0,
        },
    },
});

const title = 'Shop';

function ProductPageTemplate()
{
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div align='center'>
                <Grid container-spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant={'h4'} align={'center'}>
                            "Lorem ipsum"
                        </Typography>
                    </Grid>
                    <div align='center'>
                        <Grid item xs={6} className={classes.float}>
                            <img src={img} alt="Lorem ipsum" className={classes.img}/>
                        </Grid>
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
            </div>
        </>
    );
}

export default ProductPageTemplate;