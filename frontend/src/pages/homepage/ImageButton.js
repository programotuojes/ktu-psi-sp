import React from "react";
import Grid from '@material-ui/core/Grid';

function ImageButton(image)
{
    const styles = {
        picture: {
            height: '50%',
            width: '50%',
       },

        hover:{
            cursor: 'pointer',
        },

       icon: {
            display:'flex',
       },
    }

    return (
        <Grid item className={styles.icon}>
            <a href="https://material-ui.com/" className={styles.icon}>
                <img src={image.image}  alt={"Blog logo"} className={styles.picture}/>
            </a>
            <a href="https://material-ui.com/" className={styles.icon}>
                <img src={image.image} alt={"Shop logo"} className={styles.picture}/>
            </a>
        </Grid>
    );
}

export default ImageButton;
