import { useEffect, useRef, useState } from 'react';
import { useDataSearch } from './useDataSearch';

export const useFetchSearch = () => {

    const result = useDataSearch();

    const isMounted = useRef(true);
    const [stateData, setStateData] = useState({ loadingSearch: false, error: null, data: [] });


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            setStateData({
                loadingSearch: true,
                error: null,
                data: result
            });
        }

    }, [result]);

    return stateData;

}
