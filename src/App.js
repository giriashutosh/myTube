import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Header />
         <Body/>
      </Provider>
     
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
