import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';

export const MarvelComicsItem = ({ id, title, images }) => {

    return (
        <>
            <div className='col animate__animated animate__fadeIn '>
                <Link to={`/comic/${id}`}>
                    <div className="card 
                            border-danger
                            text-bg-dark
                            cardComics"
                    >
                        <div>
                            <figure>
                                <img src={images} className="card-img-top " alt={title}></img>
                            </figure>
                                <div className="card-body ">
                                    <h5 className="card-title ">{title}</h5>
                                </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
MarvelComicsItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

