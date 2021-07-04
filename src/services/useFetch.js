import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogData, setBlogData] = useState(() => {
        return null;
    });

    const [loading, setLoading] = useState(() => true);
    const [error, setError] = useState(() => null);

    useEffect(() => {
        const abortControl = new AbortController();
        fetch(url, { signal: abortControl.signal }).then((res) => {
            if (!res.ok)
                throw Error("Could Not Fetch Data for that resource");

            return res.json();
        }).then((data) => {

            setBlogData(data);
            setLoading(false);
            setError(null);

        }).catch((err) => {
            if (err.name === "AbortError")
                console.log("fetch aborted");
            else {
                setError(err.message);
                setLoading(false);
                setBlogData(null);
            }
        });

        return () => abortControl.abort();
    }, [url]);

    return { blogData, loading, error };
}

export default useFetch;