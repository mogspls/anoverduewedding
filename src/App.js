import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* Views 
-----------------------*/
import Homeview from "./views/Homeview";
import RSVP from "./views/RSVP";
import ComingSoon from "./views/ComingSoon";

/* Components 
-----------------------*/
import Header from "./components/Header";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <ComingSoon/>} />
      <Route exact path="/homepage" component={() => <Homeview/>} />
      <Route exact path="/RSVP" component={() => <RSVP/>} />
    </Switch>
  )
}

// eslint-disable-next-line
export default () => (
  <Router>
    <Header/>
    <App/>
  </Router>
);