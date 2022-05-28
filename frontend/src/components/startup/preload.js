import React from "react";
import { motion } from "framer-motion"

// Hooks
import { useState } from "react";

// Comp
import Loading from "./loading"

// Images
import PowerBtn from "../../assets/images/powerBtn.png"

function PreLoad(props) {

  const [isLoading, setIsLoading] = useState(false)

  function turnOn(){
    setIsLoading(true)
    setTimeout( () => {
      props.powerOn()
    }, 9000)
  }

  return(isLoading 
    ? <Loading muteSound={props.muteSound} />
    :
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{duration: 1, delay: 1.5}}
      className="text-center">
        <motion.img 
            whileTap={{ scale: 1 }}
            whileHover={{
                scale:1.3,
                zIndex: 3,
            }}
            onClick={turnOn}
            className="pb-5" 
            src={PowerBtn} 
            alt="powerBtn" 
            width={"200rem"}>
        </motion.img>
        <p className="text-light display-3 align-self-center pt-5">Press Button To Turn On</p>
    </motion.div>
  )
}
  
export default PreLoad