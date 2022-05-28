import React from 'react';
import green_bg from '../../../../assets/images/green_bg.png'
import { motion } from "framer-motion"

const Side_Preview = (props) => {

    switch(props.context){
      case "home":
        return (
          <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block pt-0 pe-0">
            <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
              <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                <img src={green_bg} className="card-img-top" style={{height: '9.25rem'}} alt="project"></img>
                <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                  <p className="card-text ms-2 fs-2">About Me</p>
                </div>
              </div>
              </div>
              <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark my-1 d-lg-none d-xl-block" style={{width: '10rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '9.25rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-2">Social</p>
                    </div>
                  </div>
              </div>
              <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '9.25rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-3">0/5</p>
                    </div>
                  </div>          
              </div>
          </motion.div>
      );

      case "me":
        return (
          <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center pe-0">
                    <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[0].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[1].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={props.projects[2].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                        </div>
                    </div>
          </motion.div>
        );
        case "projects":
          return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center pe-0">
              <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                      <img src={props.projects[0].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                  </div>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                      <img src={props.projects[1].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                  </div>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                      <img src={props.projects[2].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                  </div>
              </div>
            </motion.div>
          );
          case "projects/webdev":
            return (
              <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center pe-0">
                <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                    <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                        <img src={props.projects[0].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                    </div>
                    <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                        <img src={props.projects[1].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                    </div>
                    <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                        <img src={props.projects[2].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                    </div>
                </div>
              </motion.div>
            );
            case "projects/python":
              return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center pe-0">
                  <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                      <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                          <img src={props.projects[0].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                      </div>
                      <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                          <img src={props.projects[1].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                      </div>
                      <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                          <img src={props.projects[2].right_preview} className="card-img-top" style={{height: '12.3rem'}} alt="project"></img>
                      </div>
                  </div>
                </motion.div>
              );
              case "projects/discord":
                return (
                  <motion.div initial={{opacity: 0}} animate={{opacity: 0.5}} transition={{duration: 0.75, }} className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center pe-0">
                    <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                    </div>
                  </motion.div>
                );
      
      default:
        <div>Some shit went wrong bro idk</div>
    }
    
};

export default Side_Preview;