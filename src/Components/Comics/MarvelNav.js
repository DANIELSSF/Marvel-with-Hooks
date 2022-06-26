import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';

export const MarvelNav = ({ setStateMarvel }) => {

    const [state, handleInputComic, reset] = useForm({
        ip: ''
    });

    const { ip } = state;
    const name = ip.replace(" ", "%20");

    const handleInput = (e) => {
        e.preventDefault();


        if (name.length < 2) {
            return;
        };

        setStateMarvel(name);
    }

    return (
        <nav className="navbar navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto" >
                    <img src="https://tm.ibxk.com.br/2018/06/08/08172409055350.jpg?ims=1120x420" alt="" width="290" height="90"></img>
                </a>
                <button className="navbar-toggler navbar-to" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title mx-auto" id="offcanvasNavbarLabel">Menu</h4>
                        <button type="button " className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr className='hr' />
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-4" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Comics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Favoritos</a>
                            </li>
                        </ul>
                        <br />
                        <form className="d-flex " role="search" onSubmit={handleInput}>
                            <input className="form-control me-2"
                                type="search"
                                placeholder="Search Comic..."
                                aria-label="Search"
                                autoComplete='off'
                                name='ip'
                                onChange={handleInputComic}
                                value={ip}
                            ></input>
                            <button className="btn btn-outline-danger" type="submit">Searchs</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
