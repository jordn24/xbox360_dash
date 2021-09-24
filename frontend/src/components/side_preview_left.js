import React from 'react';
import search_icn from "../assets/images/search.png"

const Side_Preview = () => {
    return (
        <div className="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block ps-0 align-self-center">
            <div className="d-inline-flex ps-5 pe-3 py-4 search-grad">
                <img src={search_icn} width="40px" height="40px" className="img-fluid" alt="search"></img>
            </div>
        </div>
    );
};

export default Side_Preview;