import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EnglishSongs from "./Components/EnglishSongs";
import Home from "./Components/Home/Home";
import HindiSongs from "./Components/HindiSongs";
import TamilSongs from "./Components/TamilSongs";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/English" component={EnglishSongs} />
      <Route path="/Hindi" component={HindiSongs} />
      <Route path="/Tamil" component={TamilSongs} />
    </Router>
  );
}

export default App;
