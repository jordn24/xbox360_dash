import React from 'react';
import blue_bg from '../assets/images/blue_bg.png'
import red_bg from '../assets/images/red_bg.png'
import brown_bg from '../assets/images/brown_bg.png'

const Side_Preview = () => {
    return (
        <div className="col-2 d-none d-sm-none d-md-none d-lg-none d-xl-block pt-0 pe-0 opacity-75">
        <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
              <div className="card border-secondary text-white bg-dark" style={{width: '10rem'}}>
                <img src={brown_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                <div className="card-body p-0">
                  <p className="card-text ms-2 fs-3">About Me</p>
                </div>
              </div>
          </div>
          <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
              <div className="card border-secondary text-white bg-dark my-1" style={{width: '10rem'}}>
                <img src={blue_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                <div className="card-body p-0">
                  <p className="card-text ms-2 fs-3">Skills</p>
                </div>
              </div>
          </div>
          <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
              <div className="card border-secondary text-white bg-dark" style={{width: '10rem'}}>
                <img src={red_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                <div className="card-body p-0">
                  <p className="card-text ms-2 fs-3">Experience</p>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Side_Preview;