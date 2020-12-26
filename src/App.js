import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './view/Home.js';
import Quiz from './view/Quiz.js';
import GoodHydration from './view/GoodHydration.js';
import Dehydrated from './view/Dehydrated.js';
import References from './view/References.js';

function App() {
  return (
    <div>
    {/* comment */}
    <Router>
      <Header />

      <div className="p-3">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/goodhydration">
            <GoodHydration />
          </Route>

          <Route path="/dehydrated">
            <Dehydrated />
          </Route>

          <Route path="/references">
            <References />
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
