import React from 'react'
import PropTypes from 'prop-types';
import { ComicTodoItem } from './ComicTodoItem'

export const ComicTodoFav = ({ todoComic, handleTodoRemoved}) => {
    return (
        <div>
              <div className='col-md-5
                            col-5'>
            {
                todoComic.map(todoComics => (
                    <ComicTodoItem
                        key={todoComics.id}
                        todoComics= {todoComics}
                        handleTodoRemoved= {handleTodoRemoved}
                        />
                        ))
            }
            </div>
        </div>
    )
}
ComicTodoFav.propTypes={
    todoComic: PropTypes.array.isRequired,
    handleTodoRemoved: PropTypes.func.isRequired
}
