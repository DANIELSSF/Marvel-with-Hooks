import React, { useState } from 'react';
import { MarvelComics } from './Comics/MarvelComics';
import { MarvelNav } from './Comics/MarvelNav';
import '../index.css'

export const Marvel = React.memo(() => {

    const [stateMarvel, setStateMarvel] = useState('');

    return (
        <>
            <MarvelNav setStateMarvel={setStateMarvel} />
            <div className='comicsItem'>
                <MarvelComics stateMarvel={stateMarvel} />
            </div>

        </>
    )
})
