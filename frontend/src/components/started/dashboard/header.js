import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'

import profile_pic from '../../../assets/images/profile_pic.png'
import monkey_pic from '../../../assets/images/Monkey.webp'
import dragon_pic from '../../../assets/images/Dragon.webp'
import pandemic_pic from '../../../assets/images/Pandemic.webp'
import blueFace_pic from '../../../assets/images/Blue-Face-Man.webp'
import dog_pic from '../../../assets/images/Dog.jpeg'
import powerBtn from "../../../assets/images/powerBtn.png"
import { useState } from 'react';

function Header (props) {

    const [isForm, setIsForm] = useState(false)
    const [username, setUsername] = useState("Jordan Sposito")
    const [selectPhoto, setSelectPhoto] = useState(false)
    const [profilePic, setProfilePic] = useState(profile_pic)

    const handleSubmit = () => {
        if(username === ""){
            setUsername("Jordan Sposito")
        }
        changeToForm();
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const changeToForm = () => {
        setIsForm(!isForm)
    }

    const changeToSelectPhoto = () => {
        setSelectPhoto(!selectPhoto)
    }

    const updatePhoto = (event) => {
        setProfilePic(event.target.src)
        changeToSelectPhoto()
    }

    var usernameElem;
    var photoElem;

    if (isForm){
        usernameElem =  <>  {/* Phone Size */}                           
                            <form onSubmit={handleSubmit} className='text-white float-end mt-3 d-block d-xl-none d-lg-none'>
                                <input type="text" value={username} onChange={handleChange}/>
                            </form>
                            {/* XL Size */}
                            <form onSubmit={handleSubmit} className='text-white float-end mt-1 fs-4 d-none d-lg-none d-xl-block'>
                                <input type="text" value={username} onChange={handleChange}/>
                            </form>
                            {/* LG Size */}
                            <form onSubmit={handleSubmit} className='text-white float-end mt-3 fs-5 d-none d-lg-block d-xl-none'>
                                <input type="text" value={username} onChange={handleChange}/>
                            </form>
                        </>
    } else {
        usernameElem = <> <p onClick={changeToForm} className="text-white float-end mt-1 fs-3 d-lg-none d-xl-block">{username}</p>
        <p onClick={changeToForm} className="text-white float-end mt-3 fs-5 d-none d-xl-none d-lg-block">{username}</p></> 
    }

    if (selectPhoto){
        photoElem = <div className='row'> 
                        <div className='row p-0 m-0'>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={monkey_pic} alt="profile"></img>
                            </div>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={dragon_pic} alt="profile"></img>
                            </div>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={profile_pic} alt="profile"></img>
                            </div>
                        </div>
                        <div className='row p-0 m-0'>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={pandemic_pic} alt="profile"></img>
                            </div>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={blueFace_pic} alt="profile"></img>
                            </div>
                            <div className='col p-1'>
                                <img onClick={(updatePhoto)} className="img-fluid" src={dog_pic} alt="profile"></img>
                            </div>
                        </div>
                    </div>
    } else {
        photoElem = <img onClick={(changeToSelectPhoto)} className="img-fluid float-start" height="50" width="50" src={profilePic} alt="profile"></img>
    }



    return (
        <div className="row pt-3">
            <div className='col-lg-2 col-2 ps-5 d-none d-lg-block'>
                <motion.img 
                    whileHover={{scale:1.1, zIndex: 3}} 
                    whileTap={{scale: 0.9}}
                    src={powerBtn} 
                    width="50rem"
                    onClick={props.preload}
                />
            </div>
            <div className="col-lg-2 offset-lg-7 offset-2 col-3">
                {usernameElem}
            </div>
            <div className="col-lg-1 col-5">
                {photoElem}
            </div>
            </div>
    );
};

export default Header;