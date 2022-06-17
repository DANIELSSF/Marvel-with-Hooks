import React from 'react';
import { MarvelComics } from './Comics/MarvelComics';

import '../index.css'
import { MarvelNav } from './Comics/MarvelNav';

export const Marvel = () => {


    return (
        <>
            <div className='container'>
                <MarvelNav />
            </div>
            <br/>
            <br/>
            <br/>
            <div className='comicsItem'>
                <MarvelComics />
            </div>

        </>
    )
}
