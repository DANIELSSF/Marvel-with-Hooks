import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MarvelComicsItem = ({ id, title, images }) => {

    return (
        <>
            <div className='col'>
                <Link to={`/comic/${id}`}>
                    <div className="card 
                            border-danger
                            text-bg-dark 
                            cardComics "
                    >
                        <img src={images} className="card-img-top" alt={title}></img>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
MarvelComicsItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}

