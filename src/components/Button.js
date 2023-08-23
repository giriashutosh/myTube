import React from 'react'

const Button = ({ category }) => {
    return (
        <button className='bg-gray-200  p-1 rounded-lg px-2'>{category}</button>
    )
}

export default Button
