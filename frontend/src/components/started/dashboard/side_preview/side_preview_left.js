import React from 'react';
import search_icn from "../../../../assets/images/search.png"
import { motion } from "framer-motion"

// Images
import youtube_bg from '../../../../assets/images/youtube_logo_prev.png'

const Side_Preview = (props) => {

    switch(props.context){
        case "home":
            return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-inline-flex ps-5 pe-3 py-3 search-grad">
                        <img src={search_icn} width="40px" height="40px" className="img-fluid" alt="search"></img>
                    </div>
                </motion.div>
            );
        case "me":
            return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>

                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[0].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[1].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={youtube_bg} className="card-img-top" style={{height: '12.5rem'}} alt="project"></img>
                        </div>
                    </div>
                </motion.div>
            );
        case "projects":
            return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-end" />
            );
        case "projects/webdev":
            return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>

                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[0].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[1].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[2].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                    </div>
                </motion.div>
            );
        case "projects/python":
            return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>

                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[0].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[1].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[2].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                    </div>
                </motion.div>
            );
        case "projects/discord":
            return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75}} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>

                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[0].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[1].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[2].left_preview} className="card-img-top" style={{height: '12.25rem'}} alt="project"></img>
                        </div>
                    </div>
                </motion.div>
            );
        default:
            return (<div>Some shit went wrong or nothing has been made yet</div>)
    }

};

export default Side_Preview;