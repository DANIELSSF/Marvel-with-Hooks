import React, { useContext } from 'react'
import {  useParams } from 'react-router-dom';

export const Comic = () => {


  const {id} = useParams();


  return (
    <div>Comic</div>
  )
}
