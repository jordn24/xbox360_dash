import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from "react-helmet";
import profile_pic from './assets/images/profile_pic.png'
import caro_1 from './assets/images/black-ops2.png'
import caro_2 from './assets/images/halo.png'
import caro_3 from './assets/images/fifa.png'
import myPins_ico from './assets/images/my_pins.png'
import recent_ico from './assets/images/recent.png'
import a_btn_icn from './assets/images/a_icon.png'


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
                <a class="nav-link" href="#">social</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">games</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">tv & movies</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">music</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">apps</a>
              </li>
              <li class="nav-item px-4">
                <a class="nav-link" href="#">settings</a>
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
        <div className="col-2 px-1">
          <div className="row py-1">
            <div className="col">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
          </div>
          <div className="row py-1">
            <div className="col">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
          </div>
          <div className="row py-1">
            <div className="col ">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
          </div>
        </div>
        {/* Middle Column Content */}
        <div className="col-4 px-1">
          <div className="row py-1">
            <div className="col">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col pe-1">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
            <div className="col ps-1">
              <img className="img-fluid" src={caro_1} alt="preview"></img>
            </div>
          </div>
        </div>
        {/* Right Column Content */}
        <div className="col-2 px-1">
            <div className="row py-1">
              <div className="col">
                <img className="img-fluid" src={caro_1} alt="preview"></img>
              </div>
            </div>
            <div className="row py-1">
              <div className="col">
                <img className="img-fluid" src={caro_1} alt="preview"></img>
              </div>
            </div>
            <div className="row py-1">
              <div className="col">
                <img className="img-fluid" src={caro_1} alt="preview"></img>
              </div>
            </div>
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
