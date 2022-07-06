import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../../helpers/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todoComic')) || [];
}

export const ComicsTodo = () => {
    const [todoComic, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todoComic', JSON.stringify(todoComic));
    }, [todoComic]);

    const handleTodoAdd = (newComicTodo) => {
        dispatch({
            type: 'add',
            payload: newComicTodo
        });
    };

    const handleTodoRemoved = (todoId) => {
        dispatch({
            type: 'removed',
            payload: todoId
        });
    };

}
