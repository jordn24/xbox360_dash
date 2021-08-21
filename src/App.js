import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from "react-helmet";
import profile_pic from './assets/images/profile_pic.png'
import a_btn_icn from './assets/images/a_icon.png'
import price_tracker from './assets/images/price_tracker.png'
import email_tile from './assets/images/email_tile.png'
import portfolio_tile from './assets/images/portfolio_tile.png'
import blue_bg from './assets/images/blue_bg.png'
import red_bg from './assets/images/red_bg.png'
import brown_bg from './assets/images/brown_bg.png'
import green_bg from './assets/images/green_bg.png'
import purple_bg from './assets/images/purple_bg.png'
import youtube_bg from './assets/images/youtube_logo.png'

function App() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan Sposito</title>
        <body class="bg-secondary" />
      </Helmet>
      {/* Top bar with profile pic */}
      <div className="row float-right mb-5 pb-4">
        <div className="col mt-5 me-5">
          <img className="img-fluid float-end me-4" height="50" width="50" src={profile_pic} alt="profile"></img>
        </div>
      </div>
      {/* Text headers */}
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
            <ul class="navbar-nav fs-1">
              <li class="nav-item px-4">
                <a class="nav-link" aria-current="page" href="#">bing</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link active" href="#">home</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">jordan sposito</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">projects</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">react-js</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">python</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">javascript</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">discord-js</a>
              </li>
            </ul>
          </div>
        </div>
</nav>
      {/* Tiles */}
      <div className="row mt-3">
        {/* Left Side Content */}
        <div className="col-2 col-sm-2">

        </div>
        {/* Left Column Content */}
        <div className="col-2">
          {/* Project Tile */}
          <div className="row">
              <div class="card border-secondary text-white bg-dark p-0">
                <img src={price_tracker} className="card-img-top" alt="project"></img>
                <div className="card-body p-0">
                  <p className="card-text ms-2 fs-2">Price Tracker Bot</p>
                </div>
              </div>
          </div>
          {/* Projects Tile */}
          <div className="row py-1">
            <div class="card border-secondary text-white bg-dark p-0">
                <img src={portfolio_tile} className="card-img-top" alt="project"></img>
                <div className="card-body p-0" style={{background:'#0da409'}}>
                  <p className="card-text ms-2 fs-2">Projects</p>
                </div>
              </div>
          </div>
          {/* Email Me Tile */}
          <div className="row">
            <div class="card border-secondary text-white bg-dark p-0">
                <img src={email_tile} className="card-img-top" alt="project"></img>
                <div className="card-body p-0" style={{background:'#0da409'}}>
                  <p className="card-text ms-2 fs-2">Email Me</p>
                </div>
            </div>
          </div>
        </div>
        {/* Middle Column Content */}
        <div className="col-4">
          {/* Large Project Tile */}
          <div className="row px-1">
            <div class="card border-secondary text-white bg-dark p-0" style={{height:'28.95rem'}}>
                <img src={blue_bg} className="card-img-top" alt="project"></img>
                <div className="card-body d-flex p-0 align-items-center">
                  <p className="card-text ms-3 fs-1">Jordan Sposito - Portfolio</p>
                </div>
            </div>
          </div>
          {/* Bottom Middle Tiles */}
          <div className="row pt-1">
            {/* Project Tile */}
            <div className="col-6 ps-1 p-0">
              <div class="card border-secondary text-white bg-dark p-0">
                  <img src={red_bg} className="card-img-top" alt="project"></img>
                  <div className="card-body p-0">
                    <p className="card-text ms-2 fs-2">Project</p>
                  </div>
               </div>
            </div>
            {/* Project Tile */}
            <div className="col-6 pe-1 p-0">
              <div class="card border-secondary text-white bg-dark p-0">
                    <img src={purple_bg} className="card-img-top" alt="project"></img>
                    <div className="card-body p-0">
                      <p className="card-text ms-2 fs-2">Project</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column Content */}
        <div className="col-2">
          {/* Project Tile */}
            <div className="row">
              <div class="card border-secondary text-white bg-dark p-0">
                      <img src={brown_bg} className="card-img-top" alt="project"></img>
                      <div className="card-body p-0">
                        <p className="card-text ms-2 fs-2">Project</p>
                      </div>
                </div>            
             </div>
            {/* Project Tile */}
            <div className="row py-1">
              <div class="card border-secondary text-white bg-dark p-0">
                      <img src={red_bg} className="card-img-top" alt="project"></img>
                      <div className="card-body p-0">
                        <p className="card-text ms-2 fs-2">Project</p>
                      </div>
               </div>                
            </div>
            {/* Project Tile */}
            <div className="row">
              <div class="card border-secondary text-white bg-dark p-0">
                      <img src={youtube_bg} className="card-img-top" alt="project"></img>
                      <div className="card-body p-0">
                        <p className="card-text ms-2 fs-2">Project</p>
                      </div>
               </div>                </div>
        </div>
        {/* Right Side Content */}
        <div className="col-2 col-sm-2">

        </div>
      </div>
      {/* Bottom row */}
      <div className="row d-flex pt-5 mt-5">
        <div className="col-1 pe-0">
          <img className="img-fluid float-end" src={a_btn_icn} width="35" alt="A Button"></img>
        </div>
        <div className="col-1 ps-2">
          <p className="text-light fs-4">Select</p>
        </div>
      </div>
    </div >
  );
}

export default App;
