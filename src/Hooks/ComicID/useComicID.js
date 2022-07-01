import { useEffect, useState } from 'react'

export const useComicID = (id) => {

    let url = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=ee0235138aac484e9e8bc18a99276f9f&hash=07857ef4ad731a30ff23e9ff9f8ec93a`

    const [comicID, setComicID] = useState({
        data: {},
        loading: false
    });

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(comic => {
                const { data } = comic;
                const { results } = data;
                results.map(info => {
                    const dataid = {
                        id: info.id,
                        title: info.title,
                        onSale: info.dates[0].date,
                        description: info.description,
                        prices: info.prices[0].price,
                        series: info.series.name,
                        image: `${info.thumbnail.path}/portrait_uncanny.jpg`,
                        page: info.pageCount,
                        format: info.format,
                    }
                    setComicID({loading: true, 
                                data:dataid});
                })
            });

    }, [id]);

    return comicID;
}
