import React from 'react'

export const ComicItem = ({ id,title, image, prices, format, handleTodoAdd }) => {

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
            <div className='product-card'>
                <div className='badge'>{format}</div>
                <div className='product-tumb'>
                    <img src={image} alt={title}/>
                </div>
                <div className='product-details'>
                    <div className='product-bottom-details'>
                        <div className='product-price'>${prices}</div>
                        <div className='product-links'>
                            <i className='fa-solid fa-heart'
                                type='submit'
                                onClick={handleAdd}></i>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
