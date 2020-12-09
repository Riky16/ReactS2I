import React from "react";
import HomeSearch from "./component/HomeSearch";
import Nav from "./component/Nav";
import About from "./component/About";
import BookDetail from "./component/BookDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeSearch} />
          <Route path="/about" component={About} />
          <Route path="/book/:id" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
