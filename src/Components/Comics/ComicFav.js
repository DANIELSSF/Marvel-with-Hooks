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
        <form className='product-links'
            onSubmit={handleAdd}>
            <button className='fa-solid fa-heart'
                type='submit'
            ></button >
        </form>
    )
}
ComicFav.propTypes = {
    id: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired
}