import {React,useState} from "react";
import { motion } from "framer-motion"
import { Helmet } from "react-helmet";
import useSound from 'use-sound';

import "../../assets/css/main.css"

// Components
import Header from "./dashboard/header"
import Content from "./dashboard/content"
import Footer from "./dashboard/footer_bar"

// Images
import black from "../../assets/images/black.png"

// Audio
import tvTurnOffEffect from "../../assets/audio/tv_turn_off_effect.mp3"
import bootupSound from "../../assets/audio/xbox_bootupsound.mp3"
import xbox_swipe from "../../assets/audio/xbox_swipe.mp3"
import xboxBoxHover from "../../assets/audio/xbox_boxHover.mp3"
import xboxClickSound from "../../assets/audio/xbox_boxClick.mp3"

function Dashboard(props) {

  console.count("Dashboard Render: ")

  const [exiting, setExiting] = useState(false)
  
  // Sound effects
  const [playTurnOff] = useSound(tvTurnOffEffect, {
    soundEnabled: !props.muteSound
  })
  const [playBootupSound] = useSound(bootupSound, {
    soundEnabled: !props.muteSound
  })
  const [playSwipe] = useSound(xbox_swipe, {
    soundEnabled: !props.muteSound
  })
  const [hoverSound] = useSound(xboxBoxHover, {
    soundEnabled: !props.muteSound
})
  const [clickSound] = useSound(xboxClickSound, {
    soundEnabled: !props.muteSound
  })

  const handlePowerOff = () => {
    setExiting(true)
    playTurnOff()
    setTimeout(()=> {
      props.powerOff()
    }, 1000)
  }

  if(!exiting){
    playBootupSound()
  }

  return(!exiting
      ?
      <motion.div 
      initial={{ opacity: 0, y: '100vw' }}
      animate={{ opacity: 1, y: '0vw' }}
      transition={{ type:"tween", duration: 1, ease: 'easeOut' }}
      className="container-fluid">
        <Header preload={handlePowerOff} />
        {/* Content */}
        <Content playSwipe={playSwipe} hoverSound={hoverSound} clickSound={clickSound} />
        {/* Footer */}
        <Footer />
      </motion.div>
      : 
      <>
      <Helmet>
        <body className="static-bg" />
      </Helmet>
      <motion.img
      initial={{y:'-100vw'}}
      animate={{y:'-35vw'}}
      transition={{ duration: 0.5, ease: "circOut"}}
      src={black}
      className="w-100"
      />
      <motion.img
      initial={{y:'100vw'}}
      animate={{y:'-35vw'}}
      transition={{  duration: 0.5, ease: "circOut"}}
      src={black}
      className="w-100"
      />
      </>
  )
}
  
export default Dashboard