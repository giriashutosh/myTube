import React from 'react'
import { VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../store/appSlice'
import Shimmer from './shimmer'
import useFetchApi from '../CustomHooks/useFetchApi'

const VideoContainer = () => {
    // const [videos, setVideos] = useState()
    const dispatch = useDispatch()
    const { data, loading } = useFetchApi(VIDEOS_API)
    console.log(loading)
    console.log(data)
    
    const sideBarCloseHandler = () => {
       dispatch(closeSideBar())
    }

    // const fetchVideos = async () => {
    //     try {
    //         const data = await fetch(VIDEOS_API);
    //         if (!data.ok) {
    //             throw new Error('Failed to fetch');
    //         }
    //         const json = await data.json();
    //         setVideos(json.items);
    //     } catch (error) {
    //         console.error('Error fetching videos:', error);
    //     }
    // };
    
    
    // useEffect(() => {
    //     fetchVideos()
        
    // }, [])
    
    if (loading) return <Shimmer/>

    return (
        <div className='flex flex-wrap my-2  font-roboto'>
            {
                data.map(video => <Link onClick={ sideBarCloseHandler} to={"/watch?v="+video.id} key={video.id}><VideoCard  video={ video} /></Link>) 
           }
        </div>
    )
}

export default VideoContainer
