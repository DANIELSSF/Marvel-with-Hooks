import React, { useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './Components/AppRoutes'
import { marvelContext } from './Components/helpers/useContext'

export const MarvelApp = () => {

  const [stateMarvel, setStateMarvel] = useState('');

  const [navSearch, setNavSearch] = useState(true);

  
  return (
    <div >
      <BrowserRouter>
        <marvelContext.Provider value={{
          stateMarvel,
          setStateMarvel,
          navSearch,
          setNavSearch
        }}>

          <AppRoutes />
        </marvelContext.Provider>
      </BrowserRouter>
    </div>
  )
}
