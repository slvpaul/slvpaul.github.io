import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';
import '@fontsource/roboto-slab';


const useStyles = makeStyles({
    contactContainer: {
        position: 'relative',
        height: '600px',
        maxWidth: '2000px',
        backgroundColor: '#DEE3E7',
        paddingTop: '50px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },

    text: {
        fontFamily: 'Roboto Slab',
        fontWeight: 900,
        marginBottom: '50px',
        marginLeft: '40px'
    },

    img: {
        width: '145px',
        margin: '20px'
    }
});

export default function Contact() {
    const classes = useStyles();


    return (
        <Container id='contact' className={classes.contactContainer}>
            <Typography variant='h4' className={classes.text}>Let's Work Together</Typography>
            <Box className={classes.contactlinks}>
                <a href="https://github.com/slvpaul"><img className={classes.img} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt='github' /></a>
                </Box>
                <Box>
                <a href="https://www.linkedin.com/in/paul-s-a12b561a0/"><img className={classes.img} src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt='linkedin'/></a>
                </Box>
            
        </Container>
        

    )

}