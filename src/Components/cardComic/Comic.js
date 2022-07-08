import React from 'react'
import { useParams } from 'react-router-dom';
import { useComicID } from '../../Hooks/ComicID/useComicID';
import { ComicID } from './ComicID';
import Spinner from 'react-bootstrap/Spinner';

export const Comic = () => {

  const { id } = useParams();
  const { data, loading } = useComicID(id);

  return (
    <>

      {!loading ? <div className='spinner'> <Spinner animation="border" variant="danger" /></div>
        :
        <div className='container'>
          {
            <ComicID data={data} />
          }
        </div>
      }
    </>
  )
}
