import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Comic } from './cardComic/Comic'
import { MarvelNav } from './Comics/MarvelNav'
import { ComicsTodo } from './comicsTodo/ComicsTodo'
import { Marvel } from './Marvel'


export const AppRoutes = () => {

    return (
        <>
            <div>
                <MarvelNav />
                <Routes>
                    <Route path='/' element={<Marvel />} />
                    <Route path='/comic/:id' element={<Comic />} />
                    <Route path='/comic-fav' element={<ComicsTodo />}/>

                    <Route path='/*' element={<Navigate to="/" />} />


                </Routes>
            </div>



        </>
    )

}
