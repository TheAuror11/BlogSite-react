import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const AbortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal : AbortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could Not Fetch Data For That Resource');
                }
                // console.log(res);
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1000);

        return () => AbortCont.abort;
    }, [url]);

    return { data, isPending, error};
};

export default useFetch;