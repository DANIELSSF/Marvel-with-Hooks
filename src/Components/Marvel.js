import React from 'react';
import { useFecth } from '../Hooks/useFecth';
import '../index.css'

export const Marvel = () => {

    const data = useFecth();
    console.log(data);

    return (
        <>
            <nav className="navbar navbar-dark  fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto marve" href="#">
                        <img src="https://tm.ibxk.com.br/2018/06/08/08172409055350.jpg?ims=1120x420" alt="" width="280" height="80"></img>
                    </a>
                    <button className="navbar-toggler navbar-to" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button " className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Comics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Favoritos</a>
                                </li>

                            </ul>
                            <form className="d-flex " role="search">
                                <input className="form-control me-2" type="search" placeholder="Search Comic..." aria-label="Search"></input>
                                <button className="btn btn-outline-danger" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
