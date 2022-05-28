import {React, useEffect} from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

// Components
import Tile from './tiles/tile'
import SidePreviewleft from '../side_preview/side_preview_left';
import SidePreviewright from '../side_preview/side_preview_right'

// Images
import email_tile from '../../../../assets/images/email_tile.png'
import portfolio_tile from '../../../../assets/images/portfolio_tile.png'
import youtube_bg from '../../../../assets/images/youtube_logo.png'
import black_ops from '../../../../assets/images/black-ops2.png'

const Home = (props) => {

    var projects = props.projects

    const pageVariants = {
      initial: {
        opacity: 0.5,
        x: "-100vw",
        scale: 1,
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1
      },
      out: {
        opacity: 0,
        x: "-100vw"
      }
    };
    
    const pageTransition = {
      duration: 0.4
    };

    useEffect(() => {
        props.setPrevPath("home")
    }, [])
    
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}                
        className="row mt-3">
        {/* Left Side Content */}
        <SidePreviewleft context={"home"}/>
        {/* Left Column Content */}
        <div className="col-xl-2 col-lg-2 col-12 p-xs-0">
          {/* Project Tile */}
          <div className="row">
            <Tile project={projects[0]}   />
          </div>
          {/* Projects Tile */}
          <div className="row py-1">
            <Tile isProjects={true} title="Projects" colour="rgb(0, 0, 0, 0)" thumbnail={portfolio_tile}    />
          </div>
          {/* Email Me Tile */}
          <div className="row">
            <Tile isContactMe={true} title="Contact Me" colour="rgb(0, 0, 0, 0)" thumbnail={email_tile}    />
          </div>
        </div>
        {/* Middle Column Content */}
        <div className="col-xl-4 col-lg-4 col-12 d-none	d-sm-none d-md-none d-lg-block">
          {/* Large Project Tile */}
          <div className="row px-1">
            <Tile title="Call of Duty: Black Ops II" lg_height="17.3rem" height="25rem" thumbnail={black_ops}    />
          </div>
          {/* Bottom Middle Tiles */}
          <div className="row pt-1">
            {/* Project Tile */}
            <div className="col-6 ps-1 p-0">
              <Tile project={projects[1]}   />
            </div>
            {/* Project Tile */}
            <div className="col-6 pe-1 p-0">
              <Tile project={projects[2]}   />
            </div>
          </div>
        </div>
        {/* Right Column Content */}
        <div className="col-xl-2 col-lg-2 col-12 d-none	d-sm-none d-md-none d-lg-block">
          {/* Project Tile */}
            <div className="row">
              <Tile project={projects[3]}   />
              </div>
            {/* Project Tile */}
            <div className="row py-1">
              <Tile project={projects[4]}   />           
            </div>
            {/* Project Tile */}
            <div className="row">
              <Tile isLink={true} title="" colour="rgb(0, 0, 0, 0)" thumbnail={youtube_bg} />
            </div>
        </div>
        {/* Right Side Content */}
        <SidePreviewright context={"home"} />
        </motion.div>
    );
};

export default Home;