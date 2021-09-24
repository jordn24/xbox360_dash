import React from 'react';
import Side_Preview_left from './side_preview_left';
import Side_Preview_right from './side_preview_right';
import email_tile from '../assets/images/email_tile.png'
import portfolio_tile from '../assets/images/portfolio_tile.png'
import red_bg from '../assets/images/red_bg.png'
import brown_bg from '../assets/images/brown_bg.png'
import purple_bg from '../assets/images/purple_bg.png'
import youtube_bg from '../assets/images/youtube_logo.png'
import black_ops from '../assets/images/black-ops2.png'

import Tile from './tile'

const mainSection = () => {
    return (
        <div className="row mt-3">
        {/* Left Side Content */}
        <Side_Preview_left />
        {/* Left Column Content */}
        <div className="col-xl-2 col-lg-2 col-12 p-xs-0">
          {/* Project Tile */}
          <div className="row">
            <Tile title="Project" thumbnail={purple_bg} />
          </div>
          {/* Projects Tile */}
          <div className="row py-1">
            <Tile title="Projects" colour="rgb(0, 0, 0, 0)" thumbnail={portfolio_tile} />
          </div>
          {/* Email Me Tile */}
          <div className="row">
            <Tile title="Email Me" colour="rgb(0, 0, 0, 0)" thumbnail={email_tile} />
          </div>
        </div>
        {/* Middle Column Content */}
        <div className="col-xl-4 col-lg-4 col-12 d-none	d-sm-none d-md-none d-lg-block">
          {/* Large Project Tile */}
          <div className="row px-1">
            <Tile title="Call of Duty: Black Ops II" lg_height="17.3rem" height="29rem" thumbnail={black_ops} />
          </div>
          {/* Bottom Middle Tiles */}
          <div className="row pt-1">
            {/* Project Tile */}
            <div className="col-6 ps-1 p-0">
              <Tile title="Project" thumbnail={red_bg} />  
            </div>
            {/* Project Tile */}
            <div className="col-6 pe-1 p-0">
              <Tile title="Project" thumbnail={brown_bg} />
            </div>
          </div>
        </div>
        {/* Right Column Content */}
        <div className="col-xl-2 col-lg-2 col-12 d-none	d-sm-none d-md-none d-lg-block">
          {/* Project Tile */}
            <div className="row">
              <Tile title="Project" thumbnail={purple_bg} />
             </div>
            {/* Project Tile */}
            <div className="row py-1">
              <Tile title="Project" thumbnail={brown_bg} />              
            </div>
            {/* Project Tile */}
            <div className="row">
              <Tile title="" colour="rgb(0, 0, 0, 0)" thumbnail={youtube_bg} />
            </div>
        </div>
        {/* Right Side Content */}
        <Side_Preview_right />
      </div>
    );
};

export default mainSection;