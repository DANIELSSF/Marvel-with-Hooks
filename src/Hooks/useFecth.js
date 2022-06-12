import { useEffect, useRef, useState } from 'react';
import { useData } from './useData';

export const useFecth = () => {

    const result = useData();
    const isMounted = useRef(true);
    const [stateData, setStateData] = useState({ loading: true, error: null, data: [] });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            setStateData({
                loading: false,
                error: null,
                data: result
            });
        }

    }, [result]);

    return stateData;

}
