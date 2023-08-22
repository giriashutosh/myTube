import React, { useEffect, useState } from 'react'
import { VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {
    const [videos, setVideos] = useState()

    const fetchVideos = async () => {
        try {
            const data = await fetch(VIDEOS_API);
            if (!data.ok) {
                throw new Error('Failed to fetch');
            }
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    
    
    useEffect(() => {
        fetchVideos()
        
    }, [])
    
    if (!videos) return null

    return (
        <div className='flex flex-wrap my-2  font-roboto'>
            {
                videos.map(video => <VideoCard key={video.id} video={ video} />) 
           }
        </div>
    )
}

export default VideoContainer
