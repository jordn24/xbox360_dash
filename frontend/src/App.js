import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import './custom.scss'
import './assets/css/main.css';
import { Helmet } from "react-helmet";
import Header from "./components/header";
import NavBar from './components/navbar';
import Footer_Bar from './components/footer_bar';
import MainSection from './components/mainSection';

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
      <MainSection />
      {/* Bottom row */}
      <Footer_Bar />
    </div >
  );
}

export default App;
