import React from "react";
import { useEffect } from "react";
import {Link, useLocation, useHistory} from "react-router-dom";

function Navbar(props) {

  let history = useHistory()

  return(
  <div className="col">
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block d-xl-none">
                <ul className="navbar-nav d-flex justify-content-around fs-2">
                    <li className="nav-item px-4">
                        <a className="nav-link px-4" href="https://www.bing.com/" target="_blank" rel="noreferrer">bing</a>                        
                    </li>
                    <li className="nav-item px-4">
                        <li
                        onClick={
                            () => {
                                setTimeout(() => {
                                    props.setExitAnimation("exitRight")
                                    history.push("/dashboard/home")
                                }, 10)
                            }
                        }
                        className='nav-link'>
                            home
                        </li>                            
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                            setTimeout(() => {
                               props.setExitAnimation("exitRight")
                               history.push("/dashboard/me")
                            }, 10)
                        }} 
                        className='nav-link'>
                            me
                        </li>   
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout(() => {
                                    if(history.location.pathname.replace('/dashboard/', '') === "me"){
                                        props.setExitAnimation("exitLeft")
                                    } else {
                                        props.setExitAnimation("exitRight")
                                    }
                                    history.push("/dashboard/projects")
                                }, 10)
                            }
                        }
                        className='nav-link'>
                            projects
                        </li>   
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout( () => {
                                    if(history.location.pathname.replace('/dashboard/', '') === "me" || history.location.pathname.replace('/dashboard/', '') === "projects"){
                                        props.setExitAnimation("exitLeft")
                                    } else {
                                        props.setExitAnimation("exitRight")
                                    }
                                    history.push("/dashboard/projects/webdev")
                                }, 10)
                            }
                        } className='nav-link'>
                            web
                        </li>
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout( () => {
                                    props.setExitAnimation("exitLeft")
                                    history.push("/dashboard/projects/python")
                                }, 10)
                            }
                        } 
                        className='nav-link'>
                            python
                        </li>
                    </li>
                    <li className="nav-item px-4">
                        <Link to={{
            pathname: '/dashboard/projects/discord',
          }} className='nav-link'>
                            discord
                        </Link>
                    </li>
                </ul>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-none d-xl-block pt-3">
                <ul className="navbar-nav d-flex justify-content-evenly fs-1 mt-3">
                    <li className="nav-item px-5">
                        <a className="nav-link px-4" href="https://www.bing.com/" target="_blank" rel="noreferrer">bing</a>                        
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout(() => {
                                    props.setExitAnimation("exitRight")
                                    history.push("/dashboard/home")
                                }, 10)
                            }
                        }
                        className='nav-link'>
                            home
                        </li>                             
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                            setTimeout(() => {
                               props.setExitAnimation("exitRight")
                               history.push("/dashboard/me")
                            }, 10)
                            }} 
                            className='nav-link'>
                            jordan sposito
                        </li>                              
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout(() => {
                                    if(history.location.pathname.replace('/dashboard/', '') === "me"){
                                        props.setExitAnimation("exitLeft")
                                    } else {
                                        props.setExitAnimation("exitRight")
                                    }
                                    history.push("/dashboard/projects")
                                }, 10)
                            }
                        } 
                        className='nav-link'>
                            projects
                        </li>                             
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout( () => {
                                    if(history.location.pathname.replace('/dashboard/', '') === "me" || history.location.pathname.replace('/dashboard/', '') === "projects"){
                                        props.setExitAnimation("exitLeft")
                                    } else {
                                        props.setExitAnimation("exitRight")
                                    }
                                    history.push("/dashboard/projects/webdev")
                                }, 10)
                            }
                        } 
                        className='nav-link'>
                            web applications
                        </li>                            
                    </li>
                    <li className="nav-item px-4">
                        <li onClick={
                            () => {
                                setTimeout( () => {
                                    if(history.location.pathname.replace('/dashboard/', '') === "projects/discord"){
                                        props.setExitAnimation("exitRight")
                                    } else {
                                        props.setExitAnimation("exitLeft")
                                    }
                                    history.push("/dashboard/projects/python")
                                }, 10)
                            }
                        }  
                        className='nav-link'>
                            python
                        </li>                            
                    </li>
                    <li className="nav-item px-4">
                        <li 
                        onClick={
                            () => {
                                setTimeout(() => {
                                    props.setExitAnimation("exitLeft")
                                    history.push("/dashboard/projects/discord")
                                }, 10)
                            }
                        }
                        className='nav-link'>
                            discord
                        </li>                            
                    </li>
                </ul>
        </nav>
  </div>)
}
  
export default Navbar