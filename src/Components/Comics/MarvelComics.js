import React from 'react'
import { useFecth } from '../../Hooks/useFecth'
import { MarvelComicsItem } from './MarvelComicsItem';

export const MarvelComics = () => {
    const { data, loading } = useFecth();

    console.log(data);

    return (
        <>
            {!loading && <p>loading...</p>}
            <div className='container'>
                <div className='row'>
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
