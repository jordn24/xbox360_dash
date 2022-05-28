import React from "react";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useSound from 'use-sound';
import { Helmet } from "react-helmet";

// Audio
import xboxLoading from "../../assets/audio/xbox_loading.mp3"
import xbox_swipe from "../../assets/audio/xbox_swipe.mp3"

// Images
import xboxLogo from "../../assets/images/Xbox_360_logo.png"
import xboxLogoText from "../../assets/images/Xbox_360_logo_text.png"

function Loading(props) {

  let history = useHistory();

  const [play] = useSound(xboxLoading, {
    soundEnabled: !props.muteSound
  })
  play()

  useEffect(() => {
    return function exitSounds() {
      history.push("/dashboard/home") 
    }
  }, [])

  return(
    <>
        <Helmet>
            <body class="d-flex bg-light align-items-center justify-content-center" />
        </Helmet>
        <div 
        className="text-center"
        >
          <motion.div 
          className="d-row pb-5"
          initial={{ opacity: 0, x: "-30vw", y: "-30vw", scale: 10 }}
          animate={{ opacity: 1, x:"0vw", y:"0vw", scale: 1, rotate: 360}}
          transition={{ delay: 3, duration: 2 }}
          >
            <img 
                  src={xboxLogo}
                  alt="xbox_logo"
                  width="20%"
              >
            </img>
          </motion.div>
          <motion.div 
          initial={{ y: "-10vw",opacity: 0, scale: 0 }}
          animate={{ y: "0vw", opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="d-row">
            <img 
                  src={xboxLogoText}
                  alt="xbox_logo"
                  width="55%"
              >
            </img>
          </motion.div>
        </div>
    </>
  )
}
  
export default Loading