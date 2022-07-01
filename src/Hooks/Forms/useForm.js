import  { useState } from 'react'

export const useForm = (inicialState = {}) => {

    const [state, setState] = useState(inicialState);

    const reset = () => {
        setState(inicialState);
    };


    const handleInputComic = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        });

    };
    return [state, handleInputComic, reset];
}
