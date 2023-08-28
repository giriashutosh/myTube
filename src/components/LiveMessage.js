import { FaUserCircle } from "react-icons/fa";

const LiveMessage = ({dp, name, message}) => {
    return (
        <div>
            <div className="flex p-2 text-sm ml-2 ">
       
          <FaUserCircle className="my-1" size={20} />
        
        <h1 className="font-semibold  mx-1">Ashutosh Giri</h1>
        <h1 className="mx-2 text-sm">Its a nice video and explanation, amazing</h1>
      </div>
     </div>
 )
}

export default LiveMessage