import React from 'react';

const NavBar = () => {
    return (
            <div className="col mt-3">
                <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block d-xl-none">
                        <ul className="navbar-nav d-flex justify-content-around fs-2">
                            <li className="nav-item px-4">
                            <a className="nav-link" aria-current="page" href="#">bing</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link active" href="#">home</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">me</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">projects</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">web</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">python</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">javascript</a>
                            </li>
                        </ul>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-none d-xl-block mt-4">
                        <ul className="navbar-nav d-flex justify-content-end fs-1 mt-3">
                            <li className="nav-item px-5">
                            <a className="nav-link" aria-current="page" href="#">bing</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link active" href="#">home</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">jordan sposito</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">projects</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">web</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">python</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">javascript</a>
                            </li>
                            <li className="nav-item px-4">
                            <a className="nav-link" href="#">settings</a>
                            </li>
                        </ul>
                </nav>
            </div>
    );
};

export default NavBar;