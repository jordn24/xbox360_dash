import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

// Components
import SidePreviewleft from './side_preview_left';
import SidePreviewright from './side_preview_right';
import Tile from './tile'

// Images
import brown_bg from '../assets/images/brown_bg.png'
import purple_bg from '../assets/images/purple_bg.png'

const Projects = (props) => {
  
  console.log(props)

  const leftDir = "-100vw"
  const rightDir = "100vw"
  let prevPath = props.location.state
  var entryDir = leftDir
  var leftSide;
  var filter = props.location.state.filter

  const handleExitDir = (pathname) => {
    for(var i = 0; i < leftSide.length; i++){
      if(leftSide[i] === pathname){
        return rightDir
      }
    }
    return leftDir
  }

  if (filter === "None"){
    leftSide = ["/home", "/me"]
  } else if (filter === "webdev"){
    leftSide = ["/home", "/me", "/projects"]
  } else if (filter === "python"){
    leftSide = ["/home", "/me", "/projects", "/projects/webdev"]
  } else if (filter === "discord"){
    leftSide = ["/home", "/me", "/projects", "/projects/webdev", "/projects/python"]
  }

  for(var i = 0; i < leftSide.length; i++){
    if(leftSide[i] === prevPath["prevPath"]){
      entryDir = rightDir
    }
  }

  const pageVariants = {
    initial: {
      opacity: 0.5,
      x: entryDir,
      scale: 1
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: handleExitDir(props.history.location.pathname)
    }
  };
  
  const pageTransition = {
    ease: "linear",
    duration: 0.2
  };
  
    return (
      <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}                
      className="row mt-3">
        {/* Left Side Content */}
        <SidePreviewleft context="projects"/>
        {/* Column 1 Content */}
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
            <div className="row py-1">
              <Tile title="Project" thumbnail={brown_bg} />              
            </div>
        </div>
        {/* Column 2 Content */}
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
            <div className="row py-1">
              <Tile title="Project" thumbnail={brown_bg} />              
            </div>
        </div>
        {/* Column 3 Content */}
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
            <div className="row py-1">
              <Tile title="Project" thumbnail={brown_bg} />              
            </div>
        </div>
        {/* Column 4 Content */}
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
            <div className="row py-1">
              <Tile title="Project" thumbnail={brown_bg} />              
            </div>
        </div>
        {/* Right Side Content */}
        <SidePreviewright context="projects" />
      </motion.div >
    );
};

export default Projects;