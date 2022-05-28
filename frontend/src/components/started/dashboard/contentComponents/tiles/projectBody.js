import React from 'react';
import {motion} from 'framer-motion/dist/framer-motion'
import {
    useHistory,
    useParams
  } from "react-router-dom";
import { useEffect, useState } from "react";

function TileBody(props){

    let history = useHistory()

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        fetchData();
        }, []);
    
    const fetchData = async () => {
        const data = await fetch('/projectById?id=' + id)
        data.json().then((d) => {
            setItems(d[0])
            setIsLoaded(true)
        })
      };
    
    const pageVariants = {
        initial: {
          opacity: 0
        },
        in: {
          opacity: 1
        },
        out: {
            opacity: 0
        }
      };

    const transition = {
        duration: 0.5
    };

    return (<>
        <motion.div 
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={transition}
        className="row m-1 bg-light d-none d-xl-block p-3">
            <p className='display-3 text-center p-2'>{items.projectTitle}</p>
            <div className='row p-2'>
                <div className='col-8'>
                    <p>{items.description}</p>
                </div>
                <div className='col-4 text-center'>
                    <img  src={items.thumbnail} width="450rem" alt="project"></img>
                </div>
            </div>
            <div className='row p-2'>
                <div className='col-4 text-center'>
                    <img  src={items.tech_image} width="450rem" alt="project"></img>
                </div>
                <div className='col-8'>
                    <p>{items.technologiesDesc}</p>
                    <p>{items.link}</p>
                </div>
            </div>
        </motion.div>
        <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={transition}
        className="row m-3 bg-light d-none d-lg-block d-xl-none">
            <p className='display-5 text-center p-2'>{items.projectTitle}</p>
            <div className="row p-2">
                <div className='col-8'>
                    <p >{items.description}</p>
                </div>
                <div className='col-4 text-center'>
                    <img  src={items.thumbnail} width="300rem" alt="project"></img>
                </div>
            </div>
            <div className="row p-2">
                <div className='col-4 text-center'>
                    <img  src={items.tech_image} width="300rem" alt="project"></img>
                </div>
                <div className='col-8'>
                    <p >{items.technologiesDesc}</p>
                    <p >{items.link}</p>
                </div>
            </div>
        </motion.div>
        <motion.div 
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={transition}
        className="row m-3 bg-light d-block d-lg-none">
            <p className='display-3 text-center p-4'>{items.projectTitle}</p>
            <div className='col-12 p-2'>
                <p className='fs-7'>{items.description}</p>
            </div>
            <div className='col-12 p-2'>
                <img  src={items.thumbnail} width="100%" alt="project"></img>
            </div>
            <div className='col-12 p-2'>
                <p className='fs-7'>{items.link}</p>
                <button className='btn-sm btn-danger' onClick={() => {history.goBack()}}>Go Back</button>
            </div>
        </motion.div>
    </>)
}

export default TileBody