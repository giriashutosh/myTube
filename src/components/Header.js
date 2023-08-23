import React from 'react'
import Hamburger from '../Assets/Images/Hamburger_icon.png'
import Hippo from '../Assets/Images/hippo.png'
import UserImg from '../Assets/Images/user.png'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../store/appSlice'
import { Link } from 'react-router-dom'
const Header = () => {
    const dispatch = useDispatch()

    const sidebarHandler = () => {
       dispatch(toggleSideBar())
    }
    
    return (
        <div className='grid grid-flow-col flex items-center p-2 shadow-lg'>
            {/* for hamberger and Logo */}
            <div className='flex gap-4 grid-col-1  p-2'>
                <img className="w-10 " src={Hamburger} alt="" onClick={sidebarHandler}/>
                <Link to="/"><img className="w-20" src={Hippo} alt="" /></Link>
            </div>

            {/* for search  */}
            <div className='grid-col-10  flex'>
                <input className='w-[29rem] pl-2 border-2 rounded-l-full h-10 outline-none start-2'></input>
                <button className='bg-gray-100 flex items-center p-2 rounded-r-full'>🔍</button>
            </div>
            
            {/* for user account  */}
            <div className='grid-col-10  flex flex-row-reverse '>
                <img className="w-10 py-2 pr-2 mr-2" src={UserImg} alt=""/>
            </div>
        </div>
    )
}

export default Header
