import React from 'react';
import { useFecth } from '../Hooks/useFecth';
import '../index.css'

export const Marvel = () => {

    const data = useFecth();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className=" navbar-nav mx-auto " id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <video autoPlay muted loop>
                <source src='src\Sources\intro.mp4' type='video/mp4'></source>
            </video>
        </>
    )
}
