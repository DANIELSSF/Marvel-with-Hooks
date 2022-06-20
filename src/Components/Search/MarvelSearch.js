import React from 'react'
import { useFetchSearch } from '../../Hooks/SearchIndexComcis/useFecthSearch';
import { MarvelSearchItem } from './MarvelSearchItem';

export const MarvelSearch = () => {
    const { data, loadingSearch } = useFetchSearch();

    console.log(data);

    return (
        <>
            {!loadingSearch && <p>loading...</p>}
            <div className='container'>
                <div className='row'>
                    {
                        data.map(datas => (
                            <MarvelSearchItem
                                key={datas.id}
                                {...datas} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}
