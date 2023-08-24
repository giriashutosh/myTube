import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const VideoCard = ({video}) => {
    
    const thumbnail = video.snippet.thumbnails.medium.url
    const title = video.snippet.title
    const channelTitle = video.snippet.channelTitle
    const views = video.statistics.viewCount / 100
    
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
    <div
      className=
        
          "w-80 h-72 p-4 m-2 shadow-2xl rounded-xl cursor-pointer hover:scale-105"
      
    >
      <img
        
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnail}
      />
      <div className="flex">
        <FaUserCircle className="m-1 text-sm" /> <h1>{channelTitle}</h1>
      </div>
      <div className="flex my-1">
        <h1 className="font-semibold text-sm">{truncateTitle(title, 50)}</h1>
      
      </div>
      <div className="flex mb-1">
        <h1 className="font-semibold text-sm">{formatViews(views)}</h1>
      
      </div>
    </div>
  )
}

export default VideoCard
