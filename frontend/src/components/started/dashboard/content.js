import { useEffect } from "react";
import {React, useState} from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion"

// Components
import Home from "./contentComponents/home"
import Me from "./contentComponents/me/me"
import Projects from "./contentComponents/projects"
import NavBar from  "../dashboard/navbar"
import Project from "./contentComponents/tiles/projectBody"
import NoMatch from "./contentComponents/noMatch"

// Images
import loadingDash from "../../../assets/images/loadingDash.png"

function Content(props) {

  let location = useLocation()

  // Fetch Data State
  const [fetchDataResp, setFetchDataResp] = useState(
    {
      "items": [],
      "isLoaded": false
    }
  )
  
  // Animation State
  const [prevPath, setPrevPath] = useState("")
  const [exitAnimation, setExitAnimation] = useState("leftDir")

  useEffect( () => {
    fetchData();
    }, []);

  useEffect( () => {
    props.playSwipe()
  }, [location])

  const fetchData = async () => {
    const data = await fetch('/projects')
    setTimeout(() => {
      data.json().then((d) => {
        setFetchDataResp(
          {
            "items": d,
            "isLoaded": true
          }
        )
    })
    }, 1500)
  }; 

  const setPreviousPath = ( (path) => {
    if(path !== prevPath){
      setPrevPath(path)
    }
  })

  const setExitAnimationParser = ( (anim) => {
    if(exitAnimation !== anim){
      setExitAnimation(anim)
    }
  })

  return(fetchDataResp.isLoaded
    ?<>
  <NavBar setExitAnimation={setExitAnimationParser} />
  <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={["/", "/dashboard", "/dashboard/home"]} >
          <Home projects={fetchDataResp.items} setPrevPath={setPreviousPath} />
        </Route>
        <Route exact path="/dashboard/me">
          <Me projects={fetchDataResp.items} prevPath={prevPath} setPrevPath={setPreviousPath} exitAnimation={exitAnimation} />
        </Route>
        <Route exact path="/dashboard/projects">
          <Projects projects={fetchDataResp.items} prevPath={prevPath} setPrevPath={setPreviousPath} exitAnimation={exitAnimation} prevPathFilters={["home", "me"]} 
            completeProjects={fetchDataResp.items}
          />    
        </Route>
        <Route exact path="/dashboard/projects/webdev">
          <Projects projects={fetchDataResp.items.filter( (p) => {return p.technology === "webdev"})} prevPath={prevPath} setPrevPath={setPreviousPath} 
            exitAnimation={exitAnimation} prevPathFilters={["home", "me", "projects"]} completeProjects={fetchDataResp.items} />
        </Route>
        <Route exact path="/dashboard/projects/python">
          <Projects projects={fetchDataResp.items.filter( (p) => {return p.technology === "python"})} prevPath={prevPath} setPrevPath={setPreviousPath} 
            exitAnimation={exitAnimation} prevPathFilters={["home", "me", "projects", "projects/webdev"]} completeProjects={fetchDataResp.items} />
        </Route>
        <Route exact path="/dashboard/projects/discord">
          <Projects projects={fetchDataResp.items.filter( (p) => {return p.technology === "discord"})} prevPath={prevPath} setPrevPath={setPreviousPath} 
            exitAnimation={exitAnimation} prevPathFilters={["home", "me", "projects", "projects/python"]} completeProjects={fetchDataResp.items}
          />
        </Route>
        <Route exact path="/dashboard/project/:id">
          <Project />
        </Route>
          <NoMatch/>
        <Route>

        </Route>
    </Switch>
  </AnimatePresence>
  </>
  : 
  <>
  <NavBar setExitAnimation={setExitAnimationParser} />
  <div className="text-center loadingMargin">
    <motion.img height={"100rem"} initial={{scale: 1}} animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity}} src={loadingDash} />
  </div>
  </>
  )
}
  
export default Content