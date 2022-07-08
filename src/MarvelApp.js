import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Components/AppRoutes'
import { marvelContext } from './helpers/useContext'

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
