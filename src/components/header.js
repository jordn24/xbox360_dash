import React from 'react';
import profile_pic from '../assets/images/profile_pic.png'

const Header = () => {
    return (
        <div className="row float-right mb-5 pb-4">
            <div className="col mt-5 me-5">
                <img className="img-fluid float-end me-4" height="50" width="50" src={profile_pic} alt="profile"></img>
            </div>
        </div>
    );
};

export default Header;