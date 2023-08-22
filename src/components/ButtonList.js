import React from 'react'
import Button from './Button'

const categoryList = ["All", "Music", "Filmi", "Gaming" , "Live" , "News", "Animated Films", "moon", "History", "Gadgets" ,"cars", "Mantras", "Tamil Cinema" ,"Dramedy", "Recently Uploaded", "Pop Music", "Game Shows", "New-Age Music"]
const ButtonList = () => {
  return (
    <div className='flex gap-4 m-2 ml-4'>
      {
              categoryList.map((category, index) => <Button key={ index} category={category}/>)
      }
    </div>
  )
}

export default ButtonList
