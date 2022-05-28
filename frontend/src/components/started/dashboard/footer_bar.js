import React from 'react';
import left_click_btn from '../../../assets/images/left_click_btn.png'
import tap_btn from '../../../assets/images/tap_btn.png'
import { motion } from "framer-motion"

const Footer_Bar = () => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 0.5, delay: 2}}
        className="row pt-2 align-self-end" >
            <div className="col-1 pe-0 	d-none	d-sm-none d-md-none d-lg-none d-xl-block">
                <img className="img-fluid float-end" src={left_click_btn} width="35" alt="Left Click"></img>
            </div>
            <div className="col-1 pb-0 mb-0 pe-0 d-lg-block d-xl-none">
                <img className="img-fluid float-end" src={tap_btn} width="35" alt="Left Click"></img>
            </div>
            <div className="col-1 pb-0 mb-0 d-xl-none">
                <p className="text-light">Select</p>
            </div>
            <div className="col-1 ps-2 	d-none d-md-none d-lg-none d-xl-block">
                <p className="text-light fs-4">Select</p>
            </div>
        </motion.div>

    );
};

export default Footer_Bar;