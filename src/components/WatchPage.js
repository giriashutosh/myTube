import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { VIDEOS_BY_ID } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'
import { AiFillEye, AiFillLike } from 'react-icons/ai'
import CommentsContainer from './CommentsContainer'
import RecommendedVideos from './RecommendedVideos'

const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [videoDetails, setVideoDetails] = useState();
    const [viewDesc, setViewDesc] = useState(false);
    const [text, setText] = useState("")
    const ID = searchParams.get("v");

    const getVideoDetails = async () => {
        const data = await fetch(VIDEOS_BY_ID + ID)
        const json = await data.json()
        setVideoDetails(json.items[0]);
        console.log(json)
    }


    useEffect(() => {
        getVideoDetails();
    }, [ID])

    return (videoDetails && (
        <div className='flex mx-10'>
            <div>
                <div className='p-5 '>
                    <iframe
                        className='rounded-lg'
                        width="1200"
                        height="600"
                        src={"https://www.youtube.com/embed/" + ID + "?autoplay=1"}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className='mx-5 w-[50rem]'>
                    <h1 className='font-bold text-lg'>{videoDetails.snippet?.title}</h1>
                    <div className='my-2 flex'>
                        <div className='flex'>
                            <FaUserCircle className="m-1" size={20} />
                            <h1>{videoDetails.snippet?.channelTitle}</h1>
                        </div>
                        <div className='flex ml-80'>
                            <AiFillLike className='m-1' size={20} />
                            <h1>{videoDetails.statistics?.likeCount}</h1>
                            <div className='flex mx-3'>
                                <AiFillEye className='m-1' size={20} />
                                <h1>{videoDetails.statistics?.viewCount}</h1>
                            </div>
                            <h1 className='mx-2 rounded-lg bg-red-900 p-1 text-white hover:cursor-pointer hover:bg-red-700'>
                                Subscribe
                            </h1>
                        </div>
                    </div>
                    <button onClick={() => { setViewDesc(!viewDesc) }}
                        className='rounded-lg bg-slate-800 text-white p-1 w-40 cursor-pointer'>
                        Show Description ⬇️
                    </button>
                    {viewDesc && (
                        <div className='bg-slate-200 p-2 rounded-lg my-2'>
                            <p>{videoDetails.snippet?.description}</p>
                        </div>
                    )}
                </div>
                {
                    videoDetails.snippet?.liveBroadcastContent === "none" ? (
                        <CommentsContainer />) : null

                }
            </div>
            <RecommendedVideos setId={setSearchParams} videoId={ID} />
        </div>
    ))
}

export default WatchPage
