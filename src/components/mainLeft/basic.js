import { Button, makeStyles } from "@material-ui/core";
import { Context } from "contexts/context";
import React, { useContext } from "react";
import { useTranslate } from "react-redux-multilingual/lib/context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Skill from "./Skill";
import './style.css'
const useStyles = makeStyles({
  rootAdd: {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },
  rootRemove: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    textAlign: "center",
    minWidth: 130,
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#0298B8 ",
  },
});

function Basic() {
  const t=useTranslate()
  const { control, addFakeData, removeData } = useContext(Context);
  const classes = useStyles();
  function useFakeData(e) {
    e.preventDefault();
    addFakeData();
  }
  function clearFakeData(e) {
    e.preventDefault();
    removeData();
  }
  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearFakeData}
        className={classes.rootRemove}
      >
        Remove Example
      </Button>
    );
  } else {
    expData = (
      <Button color="primary" onClick={useFakeData} className={classes.rootAdd}>
        Example
      </Button>
    );
  }

  return (
    <div className="basic">
      <div className="left">
        <div className="headerLeft">
          <div styles={{ flexGrow: 2 }}>
            <Link to="/top-cv" style={{ textAlign: "left" }}>
              <img src='https://previews.123rf.com/images/twindesigner/twindesigner1704/twindesigner170403173/76708418-cv-c-v-black-letter-logo-design-with-purple-magenta-swoosh-and-stars-.jpg' alt="logo" className="img2" />
            </Link>
          </div>
          <div styles={{ flexGrow: 1 }}>{expData}</div>
        </div>
        <Router>
          <div className="topLeft">
            <Button  component={Link} to="/top-cv/basic/header">
              {t('header')}
            </Button>

            <Button
           
              component={Link}
              to="/top-cv/basic/education"
            >
              {t('education')}
            </Button>
            <Button
            
              component={Link}
              to="/top-cv/basic/experience"
            >
              {t('experience')}
            </Button>
            <Button
             
              component={Link}
              to="/top-cv/basic/addittional"
            >
              {t('skill')}
            </Button>
          </div>
          
          <div className="formsSection">
            <Switch>
              <Route path="/top-cv/basic/header">
                <Header />
              </Route>
              <Route path="/top-cv/basic/experience">
                <Experience />
              </Route>
              <Route path="/top-cv/basic/education">
                <Education />
              </Route>
              <Route path="/top-cv/basic/addittional">
                <Skill />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Basic;
