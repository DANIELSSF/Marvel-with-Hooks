import React from 'react'
import { useTodoActions } from '../../Hooks/todoActions/useTodoActions';
import { ComicTodoFav } from './ComicTodoFav';


export const ComicsTodo = () => {

    const [todoComic, , handleTodoRemoved] = useTodoActions();

    return (
        <>
            <p>Cantidad de Comics Favoritos: {todoComic.length}</p>

            <ComicTodoFav todoComic={todoComic}
                handleTodoRemoved={handleTodoRemoved}
            />

        </>
    )
}
