import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MarvelNav } from './Comics/MarvelNav'
import { Marvel } from './Marvel'


export const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <MarvelNav />
                <div>
                    <Routes>
                        <Route path='/' element={<Marvel />} />

                        <Route path='*' element={<Marvel />} />
                    </Routes>
                </div>


            </BrowserRouter>

        </>
    )

}
