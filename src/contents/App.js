import './App.css';
import Basic from 'components/mainLeft/basic';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Right from 'components/mainRight/right';
import { Button, makeStyles } from '@material-ui/core';
import ContentProvider from 'contexts/context';



function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      
      minWidth: 100,
      marginLeft: 30,
    },
  });
  const classes = useStyles();
 
return (
  <div className= "left">
      <div className='headerLeft'>

          <Link to="/top-cv" style={{ textAlign: "left" }}>
    <img src='https://previews.123rf.com/images/twindesigner/twindesigner1704/twindesigner170403173/76708418-cv-c-v-black-letter-logo-design-with-purple-magenta-swoosh-and-stars-.jpg' 
    alt="logo" className="img2" />
          </Link>
      </div>
      <div className="cards">
         {/* <img src={logoClick} alt="logo" className="img" /> */}
        
          <Button
         className='bt'
          variant="contained"
          color="blue"
          disableElevation
          component={Link}
          to="/top-cv/basic/header"
        >
          Create CV
        </Button>
      </div>
  </div>
);
}

function App() {
 
  return (
  
    <div className="App">
  
      <ContentProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/top-cv" component={Templates} exact />
            <Route path="/top-cv/basic" component={Basic} />
          </Switch>
        </BrowserRouter>
        <Right />
      </ContentProvider>
      
    </div>
  );
}

export default App;
