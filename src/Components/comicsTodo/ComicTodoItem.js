import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useComicID } from '../../Hooks/ComicID/useComicID';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const ComicTodoItem = React.memo(({ todoComics, handleTodoRemoved }) => {

    const { id } = todoComics;
    const { data } = useComicID(id);
    const { title, image } = data;


    return (
        <>
            <Col>
                <Card bg='black'
                    border="danger"
                    className='comicFav'>
                    <Link to={`/comic/${id}`}>
                        <Card.Img src={image} />
                        <div className='title-Comic-Fav'>
                            <Card.Body>
                                <Card.Title >{title}</Card.Title>
                            </Card.Body>
                        </div>
                    </Link>
                    <Card.Body>
                        <Card.Link >
                            <div className='product-link'>
                            <i className='fa-solid fa-heart-circle-minus'
                                type='submit'
                                onClick={() => handleTodoRemoved(id)}
                            />
                            </div>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
})
ComicTodoItem.propTypes = {
    handleTodoRemoved: PropTypes.func.isRequired
}
