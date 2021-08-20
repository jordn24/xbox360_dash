import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from "react-helmet";
import profile_pic from './assets/images/profile_pic.png'
import caro_1 from './assets/images/black-ops2.png'
import caro_2 from './assets/images/halo.png'
import caro_3 from './assets/images/fifa.png'


function App() {
  return (
    <div className="container-fluid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan Sposito</title>
        <body class="bg-secondary" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Top bar with profile pic */}
      <div className="row float-right">
        <div className="col mt-5 me-5">
          <img className="img-fluid float-end me-4" height="50" width="50" src={profile_pic} alt="profile"></img>
        </div>
      </div>
      {/* Text headers */}
      <div className="row m-5 text-center">
        <div className="d-flex justify-content-evenly text-light mt-5">
          <div className="col fs-1 flex-fill">
            <p>bing</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>home</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>social</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>games</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>tv & movies</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>music</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>apps</p>
          </div>
          <div className="col fs-1 flex-fill">
            <p>settings</p>
          </div>
        </div>
      </div>
      {/* Tiles */}
      <div className="row justify-content-center mx-5">
        <div className="row">
          {/* Top 2 rows of Tiles */}
          <div className="col border p-1">
          </div>
          <div className="col border p-1">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img className="d-block" width="777" height="450" src={caro_1} alt="preview"></img>
                </div>
                <div className="carousel-item active">
                  <img className="d-block" width="777" height="450" src={caro_2} alt="preview"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col border p-1">
            <div className="row">
            </div>
            <div className="row">
            </div>
          </div>
        </div>
        {/* Bottom row of tiles */}
        <div className="row">
          <div className="col border p-1">

          </div>
          <div className="col border p-1">
            <img className="img-fluid" src={caro_2} alt="preview"></img>

          </div>
          <div className="col border p-1">
            <img className="img-fluid" src={caro_1} alt="preview"></img>
          </div>
          <div className="col border p-1">
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;
