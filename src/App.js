import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* Views 
-----------------------*/
import Homeview from "./views/Homeview";
import COVID from "./views/COVID";
import FAQs from "./views/FAQs";
import Attire from "./views/Attire";

/* Components 
-----------------------*/
import Header from "./components/Header";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Homeview/>} />
      <Route exact path="/covid-protocols" component={() => <COVID/>} />
      <Route exact path="/FAQs" component={() => <FAQs/>} />
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