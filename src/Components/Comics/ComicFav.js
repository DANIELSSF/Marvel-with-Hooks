import React from 'react';
import PropTypes from 'prop-types';


export const ComicFav = ({ id, handleTodoAdd }) => {

    const handleAdd = (e) => {
        e.preventDefault();

        const newComicTodo = {
            id,
            done: false
        }
        handleTodoAdd(newComicTodo);
    }
    return (
        <>
            <form className='product-link'>
                <i className='fa-solid fa-heart'
                    type='submit'
                    onClick={handleAdd}
                />
            </form >
        </>
    )
}
ComicFav.propTypes = {
    id: PropTypes.number.isRequired
}