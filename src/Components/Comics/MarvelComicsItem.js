import React from 'react';
import PropTypes from 'prop-types';

export const MarvelComicsItem = ({ title, images }) => {

    return (
        <>
            <div className="card 
                            col-5
                            col-lg-2
                            col-sm-4
                            col-md-3
                            ms-3
                            me-3
                            mb-3
                            g-1
                            border-danger
                            text-bg-dark 
                            cardComics "
            >
                <img src={images} className="card-img-" alt={title}></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </>
    )
}
MarvelComicsItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}

