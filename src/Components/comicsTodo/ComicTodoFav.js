import React from 'react'
import PropTypes from 'prop-types';
import { ComicTodoItem } from './ComicTodoItem'
import { Row } from 'react-bootstrap';

export const ComicTodoFav = ({ todoComic, handleTodoRemoved }) => {
    return (
        <>
            <Row xs={2} md={5} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (

                    todoComic.map(todoComics => (
                        <ComicTodoItem
                            key={todoComics.id}
                            todoComics={todoComics}
                            handleTodoRemoved={handleTodoRemoved}
                        />
                    ))
                ))}
            </Row>
        </>
    )
}
ComicTodoFav.propTypes = {
    todoComic: PropTypes.array.isRequired,
    handleTodoRemoved: PropTypes.func.isRequired
}
