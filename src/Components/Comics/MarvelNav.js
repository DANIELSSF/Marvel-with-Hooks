import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MarvelNavSearch } from './MarvelNavSearch';

export const MarvelNav = () => {

    return (
        <nav className="navbar navbar-dark ">
            <div className="container-fluid">
                <NavLink className="navbar-brand mx-auto" to="/" >
                    <img src="https://tm.ibxk.com.br/2018/06/08/08172409055350.jpg?ims=1120x420" alt="" width="290" height="90" ></img>
                </NavLink>
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
                                <Link className="nav-link active" to='/'>Comics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/comic-fav'>Favoritos</Link>
                            </li>
                        </ul>
                        <br />
                        <MarvelNavSearch />
                    </div>
                </div>
            </div>
        </nav>
    )
}
