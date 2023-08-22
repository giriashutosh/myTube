import React from 'react'
import gaming from '../Assets/Images/gaming.png'
import history from '../Assets/Images/history.png'
import home from '../Assets/Images/home.jpg'
import library from '../Assets/Images/library.jpg'
import liked from '../Assets/Images/liked.png'
import live from '../Assets/Images/live.png'
import movies from '../Assets/Images/movies-icon.jpg'
import music from '../Assets/Images/music.png'
import news from '../Assets/Images/news.png'
import shorts from '../Assets/Images/shorts.png'
import sports from '../Assets/Images/sports.png'
import subscription from '../Assets/Images/subscripition.png'
import trending from '../Assets/Images/trending-icon.jpg'
import watchlater from '../Assets/Images/watchlater.jpg'
import shopping from '../Assets/Images/shopping-bag.jpg'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isSideBarOpen = useSelector((state) => state.appReducer.isSideBarOpen)
    console.log(isSideBarOpen)
    
    if (!isSideBarOpen) return null;

    return (
        <div className='col-span-1 shadow-lg p-2 '>
            {/* <h1 className='font-bold'>Subscriptions</h1> */}
            <div className='m-3 mb-4'>
                <div className='flex p-1 gap-2 items-center m-2'>
                    <img className="w-8" src={home} alt="" />
                    Home
                </div>
                <div className='flex p-1 pl-3 gap-4 items-center m-2'>
                    <img className="w-4" src={shorts} alt="" />
                    Shorts
                </div>
                <div className='flex p-1 pl-2 gap-2 items-center m-2'>
                    <img className="w-6" src={subscription} alt='' />
                    Subscriptions
                </div>
            </div>
            <hr />

            <div className='m-2 mt-4'>
                <div className='flex p-1 pl-3 gap-2 items-center m-2'>
                    <img className="w-6" src={library} alt='' />
                    Library
                </div>
                <div className='flex p-1 pl-3 gap-2 items-center m-2'>
                    <img className="w-6" src={history} alt='' />
                    History
                </div>
                <div className='flex p-1 pl-3 gap-2 items-center m-2'>
                    <img className="w-6" src={watchlater} alt='' />
                    Watch later
                </div>
                <div className='flex p-1 gap-3 pl-3 m-2 items-center'>
                    <img className="w-6" src={liked} alt='' />
                    liked videos
                </div>
            </div>

            <hr />

            <h2 className=' flex m-2 font-bold text-lg'>Explore</h2>
            <div className='m-2'>
                <div className='flex pl-3 p-1 gap-2 m-2 items-center'>
                    <img className="w-6" src={trending} alt='' />
                    Trending
                </div>
                <div className='flex pl-3 p-1 gap-2 m-2 items-center'>
                    <img className="w-6" src={shopping} alt='' />
                    Shopping
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={music} alt='' />
                    Music
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={movies} alt='' />
                    Movies
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={live} alt='' />
                    Live
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={gaming} alt='' />
                    Gaming
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={news} alt='' />
                    News
                </div>
                <div className='flex pl-3 p-1 gap-2.5 m-2 items-center'>
                    <img className="w-6" src={sports} alt='' />
                    Sports
                </div>
            </div>
            <hr />
            {/* <div className='w-2 bg-slate-500 relative'>
           <p className=''>Our mission is to give everyone a voice and show them the world.
    We believe that everyone deserves to have a voice and that the world is a
    better place when we listen, share, and build a community through our stories</p>
               
            </div> */}

        </div>
    )
}

export default SideBar
