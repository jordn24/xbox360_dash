import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                <ul className="navbar-nav fs-1">
                    <li className="nav-item px-4">
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
                    <a className="nav-link" href="#">react-js</a>
                    </li>
                    <li className="nav-item px-4">
                    <a className="nav-link" href="#">python</a>
                    </li>
                    <li className="nav-item px-4">
                    <a className="nav-link" href="#">javascript</a>
                    </li>
                    <li className="nav-item px-4">
                    <a className="nav-link" href="#">discord-js</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;