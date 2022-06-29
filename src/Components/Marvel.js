import React, { useContext } from 'react';
import { MarvelComics } from './Comics/MarvelComics';
import { marvelContext } from './helpers/useContext';

import '../index.css'

export const Marvel = React.memo(() => {

    const { stateMarvel, setNavSearch } = useContext(marvelContext);
    setNavSearch(true);

    return (
        <>
            <div className='comicsItem'>
                <MarvelComics stateMarvel={stateMarvel} />
            </div>

        </>
    )
})
