import React, { useEffect } from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import { useHistory } from 'react-router-dom';

function Tile(props) {

    const history = useHistory();

    let id, image, title;

    if(props.project){
        image  = props.project.thumbnail;
        title = props.project.projectTitle;
        id = props.project._id;
    } else {
        image = props.thumbnail
        title = props.title
    }
    const isLink = props.isLink;
    const isProjects = props.isProjects;
    const isContactMe = props.isContactMe;
    const isAboutMe = props.isAboutMe;
    const isSocialMedia = props.isSocialMedia;
    const isAchievements = props.isAchievements;

    // Defaults
    var colour =  {
        background: 'rgb(0,0,0,0.3)'
    };
    var size = {
        width: '100%',
        height: '12.3rem'
    }
    var lg_size = {
        width: '100%',
        height: '8.5rem'
    }
    // var sm_size = {
    //     width: '100%',
    //     height: '100%'
    // }
    // var md_size = {
    //     width: '100%',
    //     height: '100%'
    // }

    // Alternatives
    if (props.height || props.width){
        size = {
            width: props.width,
            height: props.height
        }
    }
    if (props.lg_height){
        lg_size = {
            width: '100%',
            height: props.lg_height
        }
    }
    if (props.colour){
        colour =  {
            background: props.colour
        };
    }

    let whileHover, whileTap;

    if(props.isNotClickable){
        whileHover = {}
        whileTap = {}
    } else {
        whileHover = {
            scale:1.1,
            zIndex: 3,
        }
        whileTap = {
            scale: 0.9
        }
    }

    // Functions
    const manageOnClick = ((popupState) => {
        if (isLink) {
            window.open("https://youtube.com")
        } else if (isProjects) {
            let path = "/dashboard/projects";
            history.push(path)
        } else if (isContactMe) {
            window.open("mailto:jsbusiness2430@gmail.com.au")
        } else if (id !== undefined){
            let path= "/dashboard/project/" + id;
            history.push(path)
        }
    }); 

    return (
        <>
              <motion.div 
              whileTap={whileTap}
              whileHover={whileHover}
              onClick={() => manageOnClick(true)}
              className="card border-secondary p-0 text-white">
                <img src={image} className="card-img-top d-none d-lg-none d-xl-block" alt="project" style={size}></img>
                <img src={image} className="card-img-top d-none d-lg-block d-xl-none" alt="project" style={lg_size}></img>
                <img src={image} className="card-img-top d-none d-md-block d-lg-none d-xl-none" alt="project"></img>
                <img src={image} className="card-img-top d-block d-md-none d-lg-none d-xl-none" alt="project"></img>
                <div className="card-img-overlay p-0 d-flex flex-column ">
                  <p className="card-text ps-2 fs-3 mt-auto" style={colour}>{title}</p>
                </div>
              </motion.div>
        </>
    );
};

export default Tile;