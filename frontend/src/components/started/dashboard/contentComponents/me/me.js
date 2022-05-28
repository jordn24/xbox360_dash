
import {React, useEffect} from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import {Switch, Route, Redirect, useLocation, useHistory} from "react-router-dom";

// Components
import Tile from '../tiles/tile'
import SidePreviewleft from '../../side_preview/side_preview_left';
import SidePreviewright from '../../side_preview/side_preview_right'

// Images
import green_bg from '../../../../../assets/images/green_bg.png'
import gamerscore_icon from "../../../../../assets/images/gamerscore_icon.png"
import boii_icon from "../../../../../assets/images/BOII_icon.webp"
import mw3_icon from "../../../../../assets/images/mw3_prestige.webp"
import myAvatar from "../../../../../assets/images/MyAvatar.png"
import friendAvatar1 from "../../../../../assets/images/friend_avatar.png"
import friendAvatar2 from "../../../../../assets/images/friend_avatar2.png"

const Me = (props) => {

    var projects = props.projects
    const leftDir = "-100vw"
    const rightDir = "100vw"

    let entryDir = ""
    if (props.prevPath === "home"){
        entryDir = rightDir
    } else {
        entryDir = leftDir
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
            props.setPrevPath("me")
     }, [])

    return (
        <motion.div 
        initial="initial"
        animate="in"
        exit={props.exitAnimation}
        variants={pageVariants}
        transition={pageTransition}
        className="row mt-3">
            <SidePreviewleft context="me" projects={[projects[3], projects[4]]} />
            <div className="col-xl-2 col-lg-2 col-12 p-xs-0">
                    {/* Project Tile */}
                    <div className="row">
                        <Tile title="About Me" colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
                    </div>
                    {/* Projects Tile */}
                    <div className="row py-1">
                        <Tile title="Social Media" colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
                    </div>
                    {/* Email Me Tile */}
                    <div className="row">
                        <Tile title={"Achievements " + 5 + "/" + 5} colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
                    </div>
            </div>
            {/* XL Size Specific */}
            <div className='col-xl-6 d-none d-xl-block'>
                <div className="row">
                    <div className='col ps-5'>
                        <div className='row'>                        
                            <p className="username text-white">Jordan Sposito</p>
                        </div>
                        <div className='row'>                        
                            <p className='h2 text-white'>15430<img alt="exampleAltProp"   className='mb-2 ms-1' src={gamerscore_icon} style={{height: '2rem'}}></img></p>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <img alt="exampleAltProp"   className='mb-2 mt-4' src={boii_icon} style={{height: '2.7rem'}}></img>
                                <img alt="exampleAltProp"   className='mb-2 mt-4' src={mw3_icon} style={{height: '2.7rem'}}></img> 
                            </div>       
                            <motion.div 
                            whileHover={{
                            scale:1.1,
                            zIndex: 3
                            }}
                            onHoverStart={e => {}}
                            onHoverEnd={e => {}}
                            className='col-9' >
                                <img alt="exampleAltProp"   className='' src={myAvatar} style={{height: '29.5rem', width: '12rem'}}></img>               
                            </motion.div> 
                        </div>
                    </div>
                    <motion.div 
                    whileHover={{
                    scale:1.1,
                    zIndex: 3
                    }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    className='col d-flex align-items-end justify-content-end'>
                        <img alt="exampleAltProp"   className='' src={friendAvatar1} style={{height: '29.5rem', width: '12rem'}}></img>               
                        <img alt="exampleAltProp"   className='' src={friendAvatar2} style={{height: '29.5rem', width: '12rem'}}></img>               
                    </motion.div>
                </div>
            </div>
            {/* LG Size Specific */}
            <div className='col-lg-6 d-none d-xl-none d-lg-block'>
                <div className="row">
                    <div className='col ps-5'>
                        <div className='row'>                        
                            <p className="h2 text-white">jordan_sposito</p>
                        </div>
                        <div className='row'>                        
                            <p className='h4 text-white'>1543<img alt="exampleAltProp"   className='mb-2 ms-1' src={gamerscore_icon} style={{height: '2rem'}}></img></p>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <img alt="exampleAltProp"   className='mb-2 mt-2' src={boii_icon} style={{height: '2.25rem'}}></img>
                            </div>       
                            <div className='col-9' >
                                <img alt="exampleAltProp"   className='' src={myAvatar} style={{height: '19.5rem', width: '8.5rem'}}></img>               
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <SidePreviewright context="me" projects={[projects[0], projects[1], projects[2]]} />
        </motion.div >
    );
};

export default Me;