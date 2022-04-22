import React from 'react';
import green_bg from '../assets/images/green_bg.png'

const Side_Preview = (props) => {

    switch(props.context){
      case "home":
        return (
          <>
          <div className="col-1 d-flex" style={{'z-index': '100'}}>
          </div>
          <div className="col-1 d-none d-sm-none d-md-none d-lg-block d-xl-block pt-0 pe-0 opacity-50">
          <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-2">About Me</p>
                  </div>
                </div>
                
                <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-5">About Me</p>
                  </div>
                </div>
            </div>
            <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                <div className="card border-secondary text-white bg-dark my-1 d-lg-none d-xl-block" style={{width: '10rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-2">Skills</p>
                  </div>
                  </div>
                  <div className="card border-secondary text-white bg-dark my-1 d-lg-block d-xl-none" style={{width: '6rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-5">Skills</p>
                  </div>
                </div>
            </div>
            <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-2">Sign Out</p>
                  </div>
                </div>
                <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                  <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                  <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                    <p className="card-text ms-2 fs-6">Sign Out</p>
                  </div>
                </div>
            </div>
          </div>
          </>
      );

      case "me":
        return (
           <div className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block align-self-center opacity-50 pe-0">
                    <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>

                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-2">Project</p>
                            </div>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-5">Project</p>
                            </div>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-2">Project</p>
                            </div>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-5">Project</p>
                            </div>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-2">Project</p>
                            </div>
                        </div>
                        <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                            <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                            <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                                <p className="card-text ms-2 fs-5">Project</p>
                            </div>
                        </div>



                    </div>
                </div>
        );
        case "projects":
          return (
            <>
            <div className="col-1 d-flex" style={{'z-index': '100'}}>
            </div>
            <div className="col-1 d-none d-sm-none d-md-none d-lg-block d-xl-block pt-0 pe-0 opacity-50">
            <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-2">Project</p>
                    </div>
                  </div>
                  
                  <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-5">Project</p>
                    </div>
                  </div>
              </div>
              <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark my-1 d-lg-none d-xl-block" style={{width: '10rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-2">Project</p>
                    </div>
                    </div>
                    <div className="card border-secondary text-white bg-dark my-1 d-lg-block d-xl-none" style={{width: '6rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-5">Project</p>
                    </div>
                  </div>
              </div>
              <div className="d-flex align-items-end" style={{'flex-direction': 'column'}}>
                  <div className="card border-secondary text-white bg-dark d-lg-none d-xl-block" style={{width: '10rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '11.25rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-2">Project</p>  
                    </div>
                  </div>
                  <div className="card border-secondary text-white bg-dark d-lg-block d-xl-none" style={{width: '6rem'}}>
                    <img src={green_bg} className="card-img-top" style={{height: '6.75rem'}} alt="project"></img>
                    <div className="card-body p-0" style={{background:'rgb(37, 165, 41)'}}>
                      <p className="card-text ms-2 fs-6">Project</p>
                    </div>
                  </div>
              </div>
            </div>
            </>
          );
      
      default:
        <div>Some shit went wrong bro idk</div>
    }
    
};

export default Side_Preview;