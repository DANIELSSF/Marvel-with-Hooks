import { useEffect, useReducer } from "react";
import { todoReducer } from "../../helpers/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todoComic')) || [];
}

export const useTodoActions = () => {

    const [todoComic, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todoComic', JSON.stringify(todoComic));
    }, [todoComic]);


    const handleTodoAdd = (newComicTodo) => {
        const action = {
            type: 'add',
            payload: newComicTodo
        };

        dispatch(action);
    };

    const handleTodoRemoved = (todoId) => {
        dispatch({
            type: 'removed',
            payload: todoId
        });

    };
    return [todoComic, handleTodoAdd, handleTodoRemoved];
}
