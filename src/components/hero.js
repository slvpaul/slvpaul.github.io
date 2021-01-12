import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles({
    heroContainer: {
        fontFamily: 'Roboto Slab',
        fontWeight: 900,
        maxWidth: '2600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1604567394466-c19b18d40bba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHJuU0tESHd3WVVrfHxlbnwwfHx8&auto=format&fit=crop&w=2400&q=60)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
    
        },
});

export default function Hero() {
    const classes = useStyles();


    return (
            <Paper className={classes.heroContainer}>
                <Grid container direction='column' justify='center' alignItems='center' className={classes.heroTextContainer}>
                <Grid item><Typography variant='h2'>Paul Silva</Typography></Grid>
                <Grid item><Typography variant='h6'>Web Developer</Typography></Grid>
                </Grid>
            </Paper>

    )

}