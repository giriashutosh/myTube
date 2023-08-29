// import React, { useState, useEffect } from 'react'
// import Hamburger from '../Assets/Images/Hamburger_icon.png'
// import Hippo from '../Assets/Images/hippo.png'
// import UserImg from '../Assets/Images/user.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { toggleSideBar } from '../store/appSlice'
// import { Link,  useNavigate } from 'react-router-dom'
// import { FaSearch } from "react-icons/fa"
// import { SEARCH_SUGGESTION_API } from '../utils/constant'
// import { cachedSuggestions } from '../store/suggestionSlice'

// const Header = () => {
//     const [searchQuery, setSearchQuery] = useState("")
//     const [suggestions, setSuggestions] = useState([])
//     const [showSuggestions, setShowSuggestions] = useState(false)
//     const cache = useSelector(state => state.suggestionHistory)
//     const navigate = useNavigate()
//     console.log(cache)
//     const dispatch = useDispatch()

//     const sidebarHandler = () => {
//         dispatch(toggleSideBar())
//     }

//     const getSearchSuggestion = async () => {
//         try {
//             const data = await fetch(SEARCH_SUGGESTION_API + searchQuery)
//             if (!data.ok) {
//                 throw new Error("data not found")
//             }
//             const json = await data.json()
//             console.log(json[1])
//             setSuggestions(json[1])
//             dispatch(cachedSuggestions({
//                 [searchQuery]: json[1]
//             }))
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (cache[searchQuery]) {
//                 setSuggestions(cache[searchQuery])
//             } else {
//                 getSearchSuggestion()
//             }
//         }, 200)

//         return () => {
//             clearTimeout(timer)
//         }
//     }, [searchQuery])

//     return (
//         <div className='grid grid-flow-col flex items-center p-2 shadow-lg '>
//             {/* for hamberger and Logo */}
//             <div className='flex gap-4 grid-col-1  p-2'>
//                 <img className="w-10 " src={Hamburger} alt="" onClick={sidebarHandler} />
//                 <Link to="/"><img className="w-20" src={Hippo} alt="" /></Link>
//             </div>

//             {/* for search  */}
//             <div className='grid-col-10'>
//                 <div className='flex'>
//                     <input className='w-[29rem] pl-4 border-2 rounded-l-full h-10 outline-none start-2'
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onFocus={() => setShowSuggestions(true)}
//                         onBlur={() => setShowSuggestions(false)}

//                     ></input>
//                     <Link to={"/results?search_query=" + searchQuery}>
//                         <button className='bg-gray-100 flex items-center p-2 rounded-r-full'>🔍</button>

//                     </Link>
//                 </div>

//                 {showSuggestions && (suggestions.length === 0 ? (<div></div>) : (<div className='fixed border border-gray shadow-lg bg-white rounded-lg w-[29rem] py-2 px-2 absolute'>
//                     <ul>
//                         {
//                             suggestions.map((suggest) => {
//                                 return (<Link to={"/results?search_query=" + suggest} key={suggest}>
//                                     <li key={suggest} className='px-3 py-2 shadow-sm hover:bg-gray-100 text-left flex items-center gap-3' onClick={()=> navigate("/results?search_query=" + suggest)}><FaSearch />{suggest}</li>
//                                 </Link>)
//                             })
//                         }

//                     </ul>
//                 </div>))}
//             </div>

//             {/* for user account  */}
//             <div className='grid-col-10  flex flex-row-reverse '>
//                 <img className="w-10 py-2 pr-2 mr-2" src={UserImg} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Header

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "../Assets/Images/Hamburger_icon.png";
import Logo from "../Assets/Images/hippo.png";
import User from "../Assets/Images/user.png";
import { toggleSideBar } from "../store/appSlice";
import { CiSearch } from "react-icons/ci";
import { SEARCH_SUGGESTION_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { MdNotificationsActive, MdFavorite } from "react-icons/md";
import { cachedSuggestions } from "../store/suggestionSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryVisible, setSearchQueryVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((state) => state.suggestionHistory);
  const dispatch = useDispatch();
  const handelSearchClick = (option) => {
    setSearchQuery(option);
    setSearchQueryVisible(false);
  };
  useEffect(() => {
    async function getSearchSuggession() {
      const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        cachedSuggestions({
          [searchQuery]: json[1],
        })
      );
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggession();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);

  return (
    <div className="grid grid-flow-col shadow-lg p-3 sticky top-0 z-40 bg-white">
      <div className="flex cursor-pointer col-span-1">
        <img
          onClick={() => dispatch(toggleSideBar())}
          className=" h-7 m-2"
          alt="Hamburger_img"
          src={Hamburger}
        ></img>
        <img className="h-8  m-2" alt="Logo" src={Logo}></img>
      </div>
      <div>
        <div className="col-span-10 px-80 mt-2">
          <div className="flex h-11">
            <div className=" flex w-[30rem] border-2 border-solid p-2 rounded-l-full">
              <input
                className="w-[29rem] p-2 rounded-l-full outline-none border-none"
                type="text"
                placeholder="Search any video"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchQueryVisible(true)}
                // onBlur={() => setSearchQueryVisible(false)}
              />
              {searchQuery && (
                <h1
                  onClick={() => setSearchQuery("")}
                  className="mx-1 p-1 opacity-50 hover:bg-slate-200 rounded-full cursor-pointer"
                >
                  X
                </h1>
              )}
            </div>
            <button className="bg-gray-200 rounded-r-full p-2 ">🔍</button>
          </div>
          {searchQueryVisible && (
            <div className="  rounded-lg w-[30rem] fixed bg-white">
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <Link to={"/results?search_query=" + suggestion}>
                      <li
                        onClick={() => handelSearchClick(suggestion)}
                        className="flex mx-2 my-2 p-1 shadow-sm rounded hover:bg-slate-100 cursor-pointer"
                      >
                        <CiSearch className="m-1" />
                        {suggestion}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex col-span-1">
        <MdFavorite className="m-4 cursor-pointer" size={25} />

        <MdNotificationsActive className="m-4" size={25} />

        <img
          className="rounded-full h-9 m-2 cursor-pointer"
          alt="user"
          src={User}
        />
      </div>
    </div>
  );
};
export default Header;