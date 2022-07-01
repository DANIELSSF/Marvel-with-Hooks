import React from 'react'
import { useFecth } from '../../Hooks/SearchComics/useFecth'
import { MarvelComicsItem } from './MarvelComicsItem';

export const MarvelComics = ({stateMarvel}) => {
    const { data, loading } = useFecth(stateMarvel);

    return (
        <>
            {loading && <p>loading...</p>}
            <div className='container'>
                <div className='row 
                                row-cols-2
                                row-cols-md-4 
                                col-12
                                g-4
                                mx-auto'>
                    {
                        data.map(datas => (
                            <MarvelComicsItem
                                key={datas.id}
                                {...datas} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}
