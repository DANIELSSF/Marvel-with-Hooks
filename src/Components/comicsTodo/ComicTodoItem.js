import React from 'react'
import PropTypes from 'prop-types';
import { useComicID } from '../../Hooks/ComicID/useComicID';

export const ComicTodoItem = React.memo(({ todoComics, handleTodoRemoved }) => {

    const { id } = todoComics;
    const { data } = useComicID(id);
    const { title, image, format } = data;


    return (
        <>
            <div className='product-card'>
                <div className='badge'>{format}</div>
                <div className='product-tumb'>
                    <img src={image} />
                </div>
                <div className='product-details'>
                    <div className='product-bottom-details'>
                        <div className='product-price'>{title}</div>
                        <div className='product-links'>
                            <button className='fa-solid fa-heart-circle-xmark'
                                onClick={() => handleTodoRemoved(id)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})
ComicTodoItem.propTypes = {
    todoComics: PropTypes.array.isRequired,
    handleTodoRemoved: PropTypes.func.isRequired
}
