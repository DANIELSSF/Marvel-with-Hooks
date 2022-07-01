import React from 'react'

export const ComicItem = ({ image, prices, format }) => {
    return (
        <>
            <div className='product-card'>
                <div className='badge'>{format}</div>
                <div className='product-tumb'>
                    <img src={image} />
                </div>
                <div className='product-details'>
                    <div className='product-bottom-details'>
                        <div className='product-price'>${prices}</div>
                        <div className='product-links'>
                            <a  className='fa-solid fa-heart'></a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
