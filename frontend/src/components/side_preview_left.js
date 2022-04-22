import React from 'react';
import search_icn from "../assets/images/search.png"

// Images
import green_bg from '../assets/images/green_bg.png'

const Side_Preview = (props) => {

    switch(props.context){
        case "home":
            return (
                <div className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
                    <div className="d-inline-flex ps-5 pe-3 py-4 search-grad">
                        <img src={search_icn} width="40px" height="40px" className="img-fluid" alt="search"></img>
                    </div>
                </div>
            );
        case "me":
            return (
                <div className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center opacity-50">
                    <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>

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
            <div className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-end opacity-50">
                {/* <div className="d-flex align-items-start" style={{'flex-direction': 'column'}}>
                    <img className='' src={friendAvatar2half} style={{height: '36rem', width: '6rem'}}></img>               
                </div> */}
            </div>
        );
        default:
            return (<div>Some shit went wrong or nothing has been made yet</div>)
    }

};

export default Side_Preview;