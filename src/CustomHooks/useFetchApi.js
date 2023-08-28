import { useEffect, useState } from "react"

const useFetchApi = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchVideos = async () => {
        try {
            const data = await fetch(url);
            if (!data.ok) {
                throw new Error('Failed to fetch');
            }
            const json = await data.json();
            console.log(json)
            setData(json.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }finally {
            setLoading(false);
          }
    };
    
    useEffect(() => {
        fetchVideos()
    }, [url])
    
    return {data, loading}
}

export default useFetchApi