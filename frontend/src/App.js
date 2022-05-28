import React, { useEffect } from "react";
import './custom.scss'
import './assets/css/main.css';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"

// Components
import PreLoad from "./components/startup/preload"
import Dashboard from "./components/started/dashboard"

// Hooks
import { useState } from "react";

// Images
import muteButtonOn from "./assets/images/mutebutton_on.png"
import muteButtonOff from "./assets/images/mutebutton_off.png"

function App() {

  console.count("App Render: ")

  const [isPreload, setIsPreload] = useState(
    JSON.parse(localStorage.getItem('isPreload')) !== null 
    ? JSON.parse(localStorage.getItem('isPreload')) 
    : true
  )

  const [muteSound, setMuteSound] = useState(
    JSON.parse(localStorage.getItem('muteSound')) !== null 
    ? JSON.parse(localStorage.getItem('muteSound')) 
    : true
  )

  const powerOff = () => {
    setIsPreload(true)
    localStorage.setItem('isPreload', JSON.stringify(true))
  }

  const powerOn = () => {
    setIsPreload(false)
    localStorage.setItem('isPreload', JSON.stringify(false))
  }

  useEffect( () => {
    localStorage.setItem('muteSound', JSON.stringify(muteSound))
  }, [muteSound])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordan Sposito</title>
        {isPreload
          ? <body class="d-flex bg-dark align-items-center justify-content-center" />
          : <body class="box"/>
        }
      </Helmet>
      <div className="d-none d-lg-block">
          {muteSound
            ? <motion.img whileHover={{scale: 1.1}} height={"30rem"} src={muteButtonOff} onClick={() => setMuteSound(false)} />
            : <motion.img whileHover={{scale: 1.1}} height={"30rem"} src={muteButtonOn} onClick={() => setMuteSound(true)} />
          }
        </div>
        {isPreload
          ? <PreLoad powerOn={powerOn} muteSound={muteSound} />
          : 
            <Dashboard powerOff={powerOff} muteSound={muteSound} />
        }
    </>
  )
}

export default App;