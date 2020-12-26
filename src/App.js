import React from 'react';
// import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HelloWorld from './component/HelloWorld';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    {/* comment */}
    <Router>
      <Header />

      <HelloWorld name="Huilang" />

      <div className="p-3">
        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">This is the home page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">This is the about page</h1>
          </Route>
        </Switch>
      </div>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
