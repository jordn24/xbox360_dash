import * as Realm from "realm-web";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/main.css';

import { Helmet } from "react-helmet";
import Header from "./components/header";
import NavBar from './components/navbar';
import Footer_Bar from './components/footer_bar';
import MainTiles from './components/mainTiles';



const App = () => {
  return (
    <div className="container-fluid mt-5 pt-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan Sposito</title>
        <body class="bg-secondary"/>
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
