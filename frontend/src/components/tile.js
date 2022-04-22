import React from 'react';
import { useState } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import useSound from 'use-sound';

import hover_sound from "../assets/audio/hover_effect_xbox.mp3"
import click_sound from "../assets/audio/click_sound.mp3"
import Popup from "./Popup"

function Tile(props) {

    const image  = props.thumbnail;
    const title = props.title;

    // Defaults
    var colour =  {
        background: 'rgb(0,0,0,0.3)'
    };
    var size = {
        width: '100%',
        height: '14.3rem'
    }
    var lg_size = {
        width: '100%',
        height: '8.5rem'
    }
    // var sm_size = {
    //     width: '100%',
    //     height: '100%'
    // }
    // var md_size = {
    //     width: '100%',
    //     height: '100%'
    // }

    // Alternatives
    if (props.height || props.width){
        size = {
            width: props.width,
            height: props.height
        }
    }
    if (props.lg_height){
        lg_size = {
            width: '100%',
            height: props.lg_height
        }
    }
    if (props.colour){
        colour =  {
            background: props.colour
        };
    }

    // Sound Effect
    const [hoverSound] = useSound(hover_sound)
    const [clickSound] = useSound(click_sound)
    const [buttonPopup, setButtonPopup] = useState(false)
    
    // Functions
    const manageOnClick = ((popupState) => {
        clickSound()
        setButtonPopup(true)
    });

    
    return (
        <>
              <motion.div 
              whileHover={{
                  scale:1.1,
                  zIndex: 3,
              }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              onMouseEnter={hoverSound}
              onClick={() => manageOnClick(true)}
              className="card border-secondary p-0 text-white">
                <img  src={image} className="card-img-top d-none d-lg-none d-xl-block" alt="project" style={size}></img>
                <img src={image} className="card-img-top d-none d-lg-block d-xl-none" alt="project" style={lg_size}></img>
                <img src={image} className="card-img-top d-none d-md-block d-lg-none d-xl-none" alt="project"></img>
                <img src={image} className="card-img-top d-block d-md-none d-lg-none d-xl-none" alt="project"></img>
                <div className="card-img-overlay p-0 d-flex flex-column ">
                  <p className="card-text ps-2 fs-3 mt-auto" style={colour}>{title}</p>
                </div>
              </motion.div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h3>My Popup</h3>
              </Popup>
        </>
    );
};

export default Tile;