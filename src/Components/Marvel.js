import React, { useEffect } from 'react';
import { MarvelComics } from './Comics/MarvelComics';

import '../index.css'
import { MarvelNav } from './Comics/MarvelNav';
import { useFetchSearch } from '../Hooks/SearchIndexComcis/useFecthSearch';

import { MarvelSearch } from './Search/MarvelSearch';

export const Marvel = () => {

    const { loadingSearch } = useFetchSearch();

    useEffect(() => {
    }, [loadingSearch]);


    return (
        <>
            <MarvelNav />
            <div className='comicsItem'>
                {!loadingSearch ? <MarvelSearch /> : <MarvelComics />}
            </div>

        </>
    )
}
