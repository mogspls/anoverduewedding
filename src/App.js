import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* Views 
-----------------------*/
import Homeview from "./views/Homeview";
import Details from "./views/Details";
import Attire from "./views/Attire";

/* Components 
-----------------------*/
import Header from "./components/Header";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Homeview/>} />
      <Route exact path="/details" component={() => <Details/>} />
      <Route exact path="/attire" component={() => <Attire/>} />
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