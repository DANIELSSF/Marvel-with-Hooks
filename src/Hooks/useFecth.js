import { useEffect, useRef, useState } from 'react';
import {useData} from './useData';

export const useFecth = () => {

    const result = useData();
    console.log(result);
    const isMounted = useRef(true);
    const [stateData, setStateData] = useState({ loading: true, error: null, data: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        fetch(result)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setStateData({
                        loading: false,
                        error: null,
                        data,
                    });
                }
            });

    }, [result]);

    return stateData;

}
