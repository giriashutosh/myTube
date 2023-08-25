
const Shimmer = () => {
  
    return (
        <div className='flex flex-wrap my-2  font-roboto'>
            {Array(25).fill().map(() =><div
      className=
        
          "w-80 h-72 p-4 m-2 shadow-2xl rounded-xl cursor-pointer hover:scale-105 bg-gray-300" 
      
    >
     
      <div className="flex">
       
      </div>
      <div className="flex my-1">
       
      
      </div>
      <div className="flex mb-1">
        
      
      </div>
    </div>) }
        </div>
    )
}

export default Shimmer
