import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SubReddit from './Pages/SubReddit/SubReddit';
import SideBar from './Components/SideBar/SideBar';
import Search from './Pages/Search/Search'
import Spinner from './Components/Spinner/Spinner';

import { useSetData } from './Hooks/useSetData'

function App() {
  const {loading} = useSetData()
  return (
    <div className="App">
      <BrowserRouter>
    {/* <Comments /> */}
        <NavBar />
        <div className="reddit-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subreddit/:name" element={<SubReddit />} />
            <Route path = "/search" element = {<Search />} />
          </Routes>
          <SideBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
