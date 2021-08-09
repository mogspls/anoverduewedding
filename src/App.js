import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


/* Components 
-----------------------*/
import Header from "./components/Header";

/* Views 
-----------------------*/
import Homeview from "./views/Homeview"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Homeview/>}/>
    </Switch>
  )
}

export default () => (
  <Router>
    <Header/>
    <App/>
  </Router>
);