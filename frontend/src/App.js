import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/main.css';

import { Helmet } from "react-helmet";
import Header from "./components/header";
import NavBar from './components/navbar';
import Footer_Bar from './components/footer_bar';
import MainTiles from './components/mainTiles';

function App() {
  return (
    <div className="container-fluid mt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan Sposito</title>
        <body class="box border border-secondary border-1"/>
      </Helmet>
      {/* Top bar with profile pic */}
      <Header />
      {/* NavBar */}
      <NavBar />
      {/* Tiles */}
      <MainTiles />
      {/* Bottom row */}
      <Footer_Bar />
    </div >
  );
}

export default App;
