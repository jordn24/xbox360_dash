
import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

// Components
import Tile from './tile'
import SidePreviewleft from './side_preview_left';
import SidePreviewright from './side_preview_right';

// Images
import green_bg from '../assets/images/green_bg.png'
import gamerscore_icon from "../assets/images/gamerscore_icon.png"
import boii_icon from "../assets/images/BOII_icon.webp"
import mw3_icon from "../assets/images/mw3_prestige.webp"
import myAvatar from "../assets/images/MyAvatar.png"
import friendAvatar1 from "../assets/images/friend_avatar.png"
import friendAvatar2 from "../assets/images/friend_avatar2.png"

const Me = (props) => {

    const pathOrder = ["/","/home", "/me", "/projects", "/projects/webdev", "/projects/python", "/projects/discord"]
    const leftDir = "-100vw"
    const rightDir = "100vw"

    const handleExitDir = (pathname) => {
        var dir = ""
        if (pathname === pathOrder[0] || pathname === pathOrder[1]){
            dir = rightDir
        } else {
            dir = leftDir
        }
        return dir
    }

    let prevPath = props.location.state

    let entryDir = ""
    if (prevPath["prevPath"] === pathOrder[0] || prevPath["prevPath"] === pathOrder[1]){
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
            <SidePreviewleft context="me" />
            <div className="col-xl-2 col-lg-2 col-12 p-xs-0">
                    {/* Project Tile */}
                    <div className="row">
                        <Tile title="About Me" colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
                    </div>
                    {/* Projects Tile */}
                    <div className="row py-1">
                        <Tile title="Skills" colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
                    </div>
                    {/* Email Me Tile */}
                    <div className="row">
                        <Tile title="Experience" colour="rgb(0, 0, 0, 0)" thumbnail={green_bg} />
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
                                <img alt="exampleAltProp"   className='' src={myAvatar} style={{height: '34.5rem', width: '13rem'}}></img>               
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
                        <img alt="exampleAltProp"   className='' src={friendAvatar1} style={{height: '33.5rem', width: '13rem'}}></img>               
                        <img alt="exampleAltProp"   className='' src={friendAvatar2} style={{height: '34.5rem', width: '13rem'}}></img>               
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
            <SidePreviewright context="me" />
        </motion.div >
    );
};

export default Me;