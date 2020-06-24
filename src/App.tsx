import React, {Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import {Route, Switch} from "react-router";
// import Home from "./pages/Home";
// import About from "./pages/About";
const Home = lazy(() => import('./pages/Home') );
const About = lazy(() => import('./pages/About') );



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>App</title>
      </Helmet>

        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
        </Suspense>
    </div>
  );
}

export default App;
