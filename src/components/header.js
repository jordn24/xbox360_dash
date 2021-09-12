import React from 'react';
import profile_pic from '../assets/images/profile_pic.png'

const Header = () => {
    return (
        <div className="row float-right mb-1">
            <div className="col-lg-2 offset-lg-9 col-7">
                <p className="text-white float-end mt-3">Jordan Sposito</p>
            </div>
            <div className="col-lg-1 col-5">
                <img className="img-fluid float-start" height="50" width="50" src={profile_pic} alt="profile"></img>
            </div>
            </div>
    );
};

export default Header;