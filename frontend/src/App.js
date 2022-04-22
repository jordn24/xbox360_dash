import React from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import './custom.scss'
import './assets/css/main.css';
import { Helmet } from "react-helmet";
import {AnimatePresence} from 'framer-motion/dist/framer-motion'

// Components
import Header from "./components/header";
import FooterBar from './components/footer_bar';
import Home from './components/home';
import Me from './components/me';
import Projects from './components/projects';

function App(props) {

  const location = useLocation();
  

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
      <div className="col mt-3">
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block d-xl-none">
                <ul className="navbar-nav d-flex justify-content-around fs-2">
                    <li className="nav-item px-4">
                    <a className="nav-link px-4" href="https://www.bing.com/" target="_blank" rel="noreferrer">bing</a>                        
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/home', state: { prevPath: location.pathname }}} className='nav-link'>
                        home
                    </Link>                            
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/me', state: { prevPath: location.pathname }}} className='nav-link'>
                        me
                    </Link>   
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/projects', state: { prevPath: location.pathname }}} className='nav-link'>
                        projects
                    </Link>   
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/projects/webdev', state: { prevPath: location.pathname }}} className='nav-link'>
                        web
                    </Link>
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/projects/python', state: { prevPath: location.pathname }}} className='nav-link'>
                        python
                    </Link>
                    </li>
                    <li className="nav-item px-4">
                    <Link to={{pathname: '/projects/discord', state: { prevPath: location.pathname }}} className='nav-link'>
                        discord
                    </Link>
                    </li>
                </ul>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-none d-xl-block mt-4">
                <ul className="navbar-nav d-flex justify-content-evenly fs-1 mt-3">
                    <li className="nav-item px-5">
                        <a className="nav-link px-4" href="https://www.bing.com/" target="_blank" rel="noreferrer">bing</a>                        
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/', state: { prevPath: location.pathname }}} className='nav-link'>
                            home
                        </Link>                             
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/me', state: { prevPath: location.pathname }}} className='nav-link'>
                            jordan sposito
                        </Link>                              
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/projects', state: { prevPath: location.pathname, filter: "None" }}} className='nav-link'>
                            projects
                        </Link>                             
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/projects/webdev', state: { prevPath: location.pathname, filter: "webdev" }}} className='nav-link'>
                            web applications
                        </Link>                            
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/projects/python', state: { prevPath: location.pathname, filter: "python" }}} className='nav-link'>
                            python
                        </Link>                            
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{pathname: '/projects/discord', state: { prevPath: location.pathname, filter: "discord" }}} className='nav-link'>
                            discord
                        </Link>                            
                    </li>
                </ul>
        </nav>
      </div>
    {/* Main Section */}
    <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path={["/", "/home"]} component={Home}></Route>
            <Route exact path={["/me"]} component={Me}></Route>
            <Route exact path={["/projects"]} component={Projects}></Route>
            <Route exact path={["/projects/webdev"]} component={Projects}></Route>
            <Route exact path={["/projects/python"]} component={Projects}></Route>
            <Route exact path={["/projects/discord"]} component={Projects}></Route>
        </Switch>
    </AnimatePresence>
      {/* Bottom row */}
      <FooterBar />
    </div >
  );
}

export default App;
