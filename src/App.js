import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import WatchPage from './components/WatchPage';
import SearchedVideos from './components/SearchedVideos';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [{
      path: "/",
      element: <MainContainer/>
    },
      {
        path: "/",
        element: <SideBar/>
      },
      {
        path: "watch",
        element:<WatchPage/>
      },
      {
        path: "results",
        element:<SearchedVideos/>
    }]
  }
])

function App() {
  return (
    <div className="App">
     
      <RouterProvider router={appRouter}/>
   
     
    </div>
  );
}

export default App;

/* 
Header
Body
 -sidebar
   -menuitems
 -MainContainer
   -ButtonList
   -VideoContainer
     -videoCard
 */
