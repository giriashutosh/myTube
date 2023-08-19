import React from 'react'
import Hamburger from '../Assets/Images/Hamburger_icon.png'
import Hippo from '../Assets/Images/hippo.png'
import UserImg from '../Assets.Images/user.png'

const Header = () => {
    return (
        <div className='grid grid-flow-col'>
            {/* for hamberger and Logo */}
            <div className='grid-col-1 bg-slate-100'>
                <img className="w-10" src={Hamburger} alt="" />
                <img className="w-10" src={Hippo} alt="" />
            </div>
            {/* for search  */}
            <div className='grid-col-10 bg-slate-200 flex'>
                <input className='w-50 border border-2'></input>
                <div>Search</div>
            </div>
            {/* for user account  */}
            <div className='grid-col-10 bg-slate-200 flex'>
                <img src={UserImg} alt=""/>
            </div>
        </div>
    )
}

export default Header
