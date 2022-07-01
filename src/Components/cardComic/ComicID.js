import React from 'react';
import { ComicItem } from './ComicItem';
import 'animate.css';

export const ComicID = ({ data }) => {
    const { description, id, onSale, prices, series, title, image, page, format } = data;

    const date = onSale.split("T", 1);

    return (
        <>
            <div className='row comicid animate__animated animate__backInLeft'>
                <div className='col-md-5
                                col-5'>
                    <ComicItem image={image}
                        prices={prices}
                        format={format}
                    />
                </div>

                <div className='col-md-6
                                col-11'>
                    <h1 className='infoId-Title text-center '>{title} <small className='fontid'>{id}</small></h1>
                    <p className='text-center'>{description}</p>
                    <p className='infoId-p text-start'> Cantidad de Páginas: <a className='infoId-a'>{page}</a> </p>
                    <p className='infoId-p text-start'>Fecha de Publicación: <a className='infoId-a'>{date}</a> </p>
                    <p className='infoId-p text-start'>Series:</p>
                    <li className='text-center'>{series}.</li>
                </div>
            </div>
        </>
    )
}

