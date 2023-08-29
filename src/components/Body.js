import Header from "./Header"

import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"
const Body = () => {
    return (
        <>
            <Header />
            <div className="grid grid-flow-col">
                <SideBar/>
                <Outlet />
            </div>
        </>

    )
}

export default Body