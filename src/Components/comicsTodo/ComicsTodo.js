import React from 'react'
import { useTodoActions } from '../../Hooks/todoActions/useTodoActions';
import { ComicTodoFav } from './ComicTodoFav';


export const ComicsTodo = () => {

    const [todoComic, , handleTodoRemoved] = useTodoActions();

    return (
        <>
            < div className='container'>
                <h1 className='text-center'>Cantidad de Comics Favoritos: {todoComic.length}</h1>

                <ComicTodoFav todoComic={todoComic}
                    handleTodoRemoved={handleTodoRemoved}
                />
            </div>

        </>
    )
}
