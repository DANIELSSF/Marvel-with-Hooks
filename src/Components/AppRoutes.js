import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Comic } from './cardComic/Comic'
import { MarvelNav } from './Comics/MarvelNav'
import { Marvel } from './Marvel'


export const AppRoutes = () => {
    
    return (
        <>
            <div>
                <MarvelNav />
                <Routes>
                    <Route path='/' element={<Marvel />} />
                    <Route path='/comic/:id' element={<Comic />} />

                    <Route path='/*' element={<Navigate to="/" />} />


                </Routes>
            </div>



        </>
    )

}
