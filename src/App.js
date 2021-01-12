import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto-slab';
import '@fontsource/lato';
import { Container } from '@material-ui/core';
import Nav from './components/nav';
import Hero from './components/hero';
import Profile from './components/profile';
import Projects from './components/projects';
import Contact from './components/contact';

const useStyles = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    backgroundColor: '#55595C',
    maxWidth: '2600px'
},
});

function App() {
  const classes = useStyles();


  return (
    <Container className={classes.body}>
      <Nav />
      <Hero />
      <Profile />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
