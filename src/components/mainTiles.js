import React from 'react';
import Side_Preview from './side_preview';

import price_tracker from '../assets/images/price_tracker.png'
import email_tile from '../assets/images/email_tile.png'
import portfolio_tile from '../assets/images/portfolio_tile.png'
import blue_bg from '../assets/images/blue_bg.png'
import red_bg from '../assets/images/red_bg.png'
import brown_bg from '../assets/images/brown_bg.png'
import purple_bg from '../assets/images/purple_bg.png'
import youtube_bg from '../assets/images/youtube_logo.png'

const MainTiles = () => {
    return (
        <div className="row mt-3">
        {/* Left Side Content */}
        <Side_Preview />
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
        <Side_Preview />
      </div>
    );
};

export default MainTiles;