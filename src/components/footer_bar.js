import React from 'react';
import a_btn_icn from '../assets/images/a_icon.png'

const Footer_Bar = () => {
    return (
        <div className="row d-flex pt-5 mt-5">
            <div className="col-1 pe-0">
                <img className="img-fluid float-end" src={a_btn_icn} width="35" alt="A Button"></img>
            </div>
            <div className="col-1 ps-2">
                <p className="text-light fs-4">Select</p>
            </div>
        </div>

    );
};

export default Footer_Bar;