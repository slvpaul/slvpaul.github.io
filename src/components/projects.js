import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    Box, 
    Typography, 
    CardContent,
    Card,
    CardActionArea,
    CardMedia 
} from '@material-ui/core';
import theme from '../styles/theme';

const useStyles = makeStyles({
    projectsContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Roboto Slab',
            fontWeight: 900,
            marginTop: '20px',
            maxWidth: '600px'
    },

    projectsBox: {
        color: 'white',
        marginBottom: '10px'
    },

    media: {
        height: '380px',
        [theme.breakpoints.down('sm')]: {
            height: '150px'
        }
    },

    root: {
        width: '600px',
        [theme.breakpoints.down('sm')]: {
            width: '200px'
        }
    }
});

export default function Projects() {
    const classes = useStyles();


    return (
        <Container id='work' className={classes.projectsContainer}>
            <Box className={classes.projectsBox}><Typography variant='h6'>My Projects</Typography></Box>
            <Card className={classes.root}>
                <CardActionArea href="https://protected-peak-08686.herokuapp.com/">
                    <CardMedia className={classes.media} image="/images/be_mockup.png"/>
                    <CardContent>
                        <Typography variant="h5">Yoga Course App</Typography>
                        <Typography variant="subtitle2"><a href='https://github.com/slvpaul/YogaCourse'>Link to repository</a></Typography>
                        <Typography>A mobile-first online learning app made with React, Express, Mongoose and Material-UI with account creation, authentication and user progress saved in the database.</Typography>
                    

                    </CardContent>
                </CardActionArea>
            </Card>
            
        </Container>
        

    )

}