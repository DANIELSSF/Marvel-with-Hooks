import React from 'react';
import { MarvelComics } from './Comics/MarvelComics';

import '../index.css'
import { MarvelNav } from './Comics/MarvelNav';

export const Marvel = () => {


    return (
        <>
            <MarvelNav />
            <div className='comicsItem'>
                <MarvelComics />
            </div>

        </>
    )
}
