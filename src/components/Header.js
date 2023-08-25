import React, { useState, useEffect } from 'react'
import Hamburger from '../Assets/Images/Hamburger_icon.png'
import Hippo from '../Assets/Images/hippo.png'
import UserImg from '../Assets/Images/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../store/appSlice'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { SEARCH_SUGGESTION_API } from '../utils/constant'
import { cachedSuggestions } from '../store/suggestionSlice'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const cache = useSelector(state => state.suggestionHistory)
   
    console.log(cache)
    const dispatch = useDispatch()

    const sidebarHandler = () => {
        dispatch(toggleSideBar())
    }

    const getSearchSuggestion = async () => {
        try {
            const data = await fetch(SEARCH_SUGGESTION_API + searchQuery)
            if (!data.ok) {
                throw new Error("data not found")
            }
            const json = await data.json()
            console.log(json[1])
            setSuggestions(json[1])
            dispatch(cachedSuggestions({
                [searchQuery] : json[1]
            }))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery])
            } else {
                getSearchSuggestion()
            } }, 200)
       
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    return (
        <div className='grid grid-flow-col flex items-center p-2 shadow-lg '>
            {/* for hamberger and Logo */}
            <div className='flex gap-4 grid-col-1  p-2'>
                <img className="w-10 " src={Hamburger} alt="" onClick={sidebarHandler} />
                <Link to="/"><img className="w-20" src={Hippo} alt="" /></Link>
            </div>

            {/* for search  */}
            <div className='grid-col-10'>
                <div className='flex'>
                    <input className='w-[29rem] pl-4 border-2 rounded-l-full h-10 outline-none start-2'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        
                        ></input>
                    <button className='bg-gray-100 flex items-center p-2 rounded-r-full'>🔍</button>
                </div>

                {showSuggestions && (suggestions.length ===0 ? <div></div> :<div className='fixed border border-gray shadow-lg bg-white rounded-lg w-[29rem] py-2 px-2 absolute'>
                    <ul>
                        {
                            suggestions.map((suggest) => <li key={suggest} className='px-3 py-2 shadow-sm hover:bg-gray-100 text-left flex items-center gap-3'><FaSearch />{suggest}</li>)
                        }

                    </ul>
                </div>)}
            </div>

            {/* for user account  */}
            <div className='grid-col-10  flex flex-row-reverse '>
                <img className="w-10 py-2 pr-2 mr-2" src={UserImg} alt="" />
            </div>
        </div>
    )
}

export default Header
