import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { marvelContext } from '../../helpers/useContext';
import { useForm } from '../../Hooks/Forms/useForm';

export const MarvelNavSearch = () => {

    const { setStateMarvel } = useContext(marvelContext);
    const location = useLocation();
    const { pathname } = location;

    const [state, handleInputComic] = useForm({
        ip: ''
    });

    const { ip } = state;
    const name = ip.replace(" ", "%20");

    const handleInput = (e) => {
        e.preventDefault();


        if (name.length < 2) {
            return;
        };

        setStateMarvel(name);
    }


    return (
        <>
            {pathname === '/' &&
                <form className="d-flex " role="search" onSubmit={handleInput}>
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search Comic..."
                        aria-label="Search"
                        autoComplete='off'
                        name='ip'
                        onChange={handleInputComic}
                        value={ip}
                    ></input>
                    <button className="btn btn-outline-danger" type="submit">Searchs</button>
                </form>
            }
        </>
    )
}
