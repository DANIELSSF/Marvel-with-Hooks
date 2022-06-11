import { useEffect, useState } from 'react';

export const useData = () => {
    const url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ee0235138aac484e9e8bc18a99276f9f&hash=07857ef4ad731a30ff23e9ff9f8ec93a';

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                data.map(datas => {
                    setState({
                        id: datas.data.results.id,
                        title: datas.data.results.title,
                        description: datas.data.results.description,
                        images: datas.data.results.images.path`/portrait_incredible.jpg`,
                    });
                });
            });
    }, [url])

    return state;

}
