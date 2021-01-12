import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, ButtonGroup, Button, Container, Box } from '@material-ui/core';

const useStyles = makeStyles({
    grow: {
        flex: 1
    },

    appbarContainer: {
        backgroundColor: 'black',
    },
    button: {
        fontFamily: 'Lato',
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: '#55595C'
        }
    },
});


export default function Nav() {
    const classes = useStyles();


return (
    <Container>
        <AppBar className={classes.appbarContainer}>
            <Toolbar>
                <Box className={classes.grow} />
                <ButtonGroup variant='contained'>
                    <Button href='#about' className={classes.button}>About</Button>
                    <Button href='#work' className={classes.button}>Work</Button>
                    <Button href='#contact' className={classes.button}>Contact</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    </Container>


)

}