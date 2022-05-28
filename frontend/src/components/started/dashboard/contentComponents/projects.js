import {React, useEffect} from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

// Components
import SidePreviewleft from '../side_preview/side_preview_left';
import SidePreviewright from '../side_preview/side_preview_right';
import Tile from './tiles/tile'

// Images
import brown_bg from '../../../../assets/images/brown_bg.png'
import purple_bg from '../../../../assets/images/purple_bg.png'
import { useLocation } from 'react-router-dom';

const Projects = (props) => {

  let location = useLocation()

  const projects = props.projects
  

  const leftDir = "-100vw"
  const rightDir = "100vw"

  // Entry Animation Logic
  let entryDir = ""
  
  if(location.pathname.replace('/dashboard/', '') === "projects"){
      if (props.prevPath === "home" || props.prevPath === "me"){
        entryDir = rightDir
      } else {
          entryDir = leftDir
      }
  } else if (location.pathname.replace('/dashboard/', '') === "projects/webdev") {
      if (props.prevPath === "home" || props.prevPath === "me" || props.prevPath === "projects"){
        entryDir = rightDir
      } else {
          entryDir = leftDir
      }
  } else if (location.pathname.replace('/dashboard/', '') === "projects/python") {
      if (props.prevPath === "home" || props.prevPath === "me" || props.prevPath === "projects"
      || props.prevPath === "projects/webdev"){
        entryDir = rightDir
      } else {
        entryDir = leftDir
      }
  } else if (location.pathname.replace('/dashboard/', '') === "projects/discord"){
        entryDir = rightDir
  }


  function sortProjects(projects) {
    var sortedProjects = []

    for(var i = 0; i < (projects.length + (projects.length % 3)) - 1; i=i+3){
      sortedProjects.push([projects[i], projects[i+1], projects[i+2]])
    }

    // Filter undefined values
    sortedProjects = sortedProjects.filter(element => {
      return element !== undefined
    })

    let formattedSortedProjects = [];

    for(var i = 0; i < sortedProjects.length; i++) {
      formattedSortedProjects.push(sortedProjects[i].filter(element => {
        return element !== undefined
      }))
    }

    // Fill with Empty Projects
    const emptyProject = {
      "projectTitle": "Project",
      "thumbnail": brown_bg
    }
    const emptyProjectArr = [emptyProject, emptyProject, emptyProject]

    // Fill empty tiles
    if(formattedSortedProjects.length < 4){
      
      // Fill arrays with less than 3 projects
      formattedSortedProjects.forEach((projectArr) => {
        if(projectArr.length < 3){
          projectArr.push(emptyProject)
          if(projectArr.length < 3){
            projectArr.push(emptyProject)
          }
        }
      })

      // Fill return value with arrays of empty projects
      let difference = 4 - formattedSortedProjects.length
      for(var i = 0; i < difference; i++){
        formattedSortedProjects.push(emptyProjectArr)
      }
    }

    return formattedSortedProjects
  }

  const sortedProjects = sortProjects(projects)
  

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
    exitLeft: {
      opacity: 0,
      x: leftDir
    },
    exitRight: {
      opacity: 0,
      x: rightDir
    }
  };
  
  const pageTransition = {
    duration: 0.4
  };
  
  useEffect(() => {
      props.setPrevPath(location.pathname.replace('/dashboard/', ''))
  }, [])

  

  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit={props.exitAnimation}
    variants={pageVariants}
    transition={pageTransition}                
    className="row mt-3">
      {/* Left Side Content */}
      <SidePreviewleft context={location.pathname.replace('/dashboard/','')} projects={props.completeProjects.filter((p) => {
          var path = location.pathname.replace('/dashboard/','')
          if (path === "projects/webdev"){
            return true
          } else if (path === "projects/python"){
            return p.technology === "webdev"
          } else {
            return p.technology === "python"
          }
        })} />
      {/* Project Tiles */}
      {sortedProjects.map((projects) => 
        <div className="col-xl-2 col-lg-2 col-12 d-none	d-sm-none d-md-none d-lg-block">
          {projects.map((project) => 
            <div className="row py-1">
              <Tile project={project} />
            </div>
          ) 
          }
        </div>
      )

      }
      {/* Right Side Content */}
      <SidePreviewright context={location.pathname.replace('/dashboard/','')} projects={props.completeProjects.filter((p) => {
          var path = location.pathname.replace('/dashboard/','')
          if(path === "projects"){
            return p.technology === "webdev"
          } else if (path === "projects/webdev"){
            return p.technology === "python"
          } else if (path === "projects/python"){
            return p.technology === "discord"
          }
        })}  />
    </motion.div >
  );
};

export default Projects;