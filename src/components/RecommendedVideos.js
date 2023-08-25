import React,{useEffect, useState} from 'react'
import { VIDEOS_API,RELATED_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const RecommendedVideos = () => {
    const [videos, setVideos] = useState()
    //console.log(videoId)
    const fetchVideos = async () => {
        try {
            const data = await fetch(VIDEOS_API) ;
            if (!data.ok) {
                throw new Error('Failed to fetch');
            }
          const json = await data.json();
          console.log(json)
            setVideos(json.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };
    useEffect(() => {
      fetchVideos()
    }, [])
     
  if (!videos) return null
  
    const formatViews = (views) => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        } else {
            return views.toString();
        }
    }
    
    const truncateTitle = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "...";
        }
        return text;
  };
  
  return (
    <div className='mt-3'>
      {videos.map((video) => <Link to={"/watch?v=" + video.id}>
        <div className='flex m-3 '>
          <img className = "rounded-lg" src={video.snippet?.thumbnails.medium.url} alt='' />
          <div className='p-2'>
            <h3 className='font-bold text-left'>{truncateTitle(video.snippet?.title)}</h3>
            <p className='text-left'>{video.snippet.channelTitle}</p>
            <p className='text-left'>{ formatViews(video.statistics.viewCount)}</p>
          </div>
        </div>
      </Link>)}
      {/* {videos.map((video) => <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  video={ video} /></Link>)} */}
    </div>
  )
}

export default RecommendedVideos
